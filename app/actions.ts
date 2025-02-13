'use server'

import prisma from '../util/prisma'

// Changes the active menu to the one corresponding to the slug passed as a parameter.
export async function changeActiveMenu(slug: string) {
  // Updates the menu with the 'active' flag so that it no longer has the 'active' flag.
  const inactivateCurrentMenu = await prisma.menu.updateMany({
    where: {
      active: true,
    },
    data: {
      active: false,
    }
  })

  // Updates the menu corresponding to the slug parameter so that it has the 'active' flag.
  const activateNewMenu = await prisma.menu.updateMany({
    where: {
      slug: slug,
    },
    data: {
      active: true,
    }
  })

}

// Creates a new order corresponding to the price and products passed as parameters.
export async function createNewOrder(price, products, discount, method, userPin, tipPercentage, tipAmount) {

  // For each product in the order, execute the deductStock function.
  products.forEach(element => {
    deductStock(element)
  })

  /*
  Send a request to the database to create a new order with the price passed as a parameter,
  as well as the products array which is stringified and then parsed as a JSON object.
  */
  const orderRequest = await prisma.order.create({
    data: {
      subtotal: price,
      total: (price * (1-(discount/100))).toFixed(2),
      products: JSON.parse(JSON.stringify(products)),
      discount: discount,
      mop: method,
      userPin: userPin,
      tips: {
        ...(tipAmount > 0 ? {
          create: {
            amount: tipAmount,
            userPin: userPin,
          }
        } : {})
      }
    }
  })

}

// For the product passed in, decrease its 'stock' value by one.
export async function deductStock(element) {
  const request = await prisma.product.update({
    where: {
      id: element.productId,
    },
    data: {
      stock: {
        decrement: 1,
      },
    },
  })
}

/*
Updates the order corresponding to the ID passed as a parameter
so that it has the appropriate status, also passed as a parameter.
*/
export async function updateOrderStatus(id, status) {
  const request = await prisma.order.update({
    where: {
      id: id,
    },
    data: {
      status: status,
    }
  })
}

// Toggles a gift card's active state from active to inactive or vice versa.
export async function toggleGiftCardActiveState(id, state) {
  const request = await prisma.giftCard.update({
    where: {
      id: id,
    },
    data: {
      active: state,
    }
  })
}

// Generates a new gift card.
export async function generateGiftCard(value, name, message) {
  const request = await prisma.giftCard.create({
    data: {
      value: value,
      name: name,
      message: message,
    }
  })
}

// Deducts the specified value from the specified gift card.
export async function deductGiftCard(code, value) {

  const findCurrentValue = await prisma.giftCard.findMany({
    where: {
      code: code,
    },
    select: {
      value: true,
    },
  })

  const valueOfCard = findCurrentValue[0].value

  const newValueOfCard = parseFloat(valueOfCard.toString())-value

  const request = await prisma.giftCard.updateMany({
    where: {
      code: code,
    },
    data: {
      value: newValueOfCard,
    }
  })
}

// Pushes a change to the stock file in the database.
export async function pushStockChange(id, stock, onOrder) {

  const pushChange = await prisma.product.update({
    where: {
      id: id,
    },
    data: {
      stock: stock,
      onOrder: onOrder,
    }
  })

}