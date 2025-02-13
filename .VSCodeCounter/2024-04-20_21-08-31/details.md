# Details

Date : 2024-04-20 21:08:31

Directory c:\\Dev\\pos-system

Total : 61 files,  6575 codes, 317 comments, 440 blanks, all 7332 lines

[Summary](results.md) / Details / [Diff Summary](diff.md) / [Diff Details](diff-details.md)

## Files
| filename | language | code | comment | blank | total |
| :--- | :--- | ---: | ---: | ---: | ---: |
| [.env](/.env) | Properties | 1 | 4 | 2 | 7 |
| [.eslintrc.json](/.eslintrc.json) | JSON | 3 | 0 | 1 | 4 |
| [README.md](/README.md) | Markdown | 21 | 0 | 14 | 35 |
| [app/actions.ts](/app/actions.ts) | TypeScript | 115 | 14 | 20 | 149 |
| [app/api/activeCategories/route.ts](/app/api/activeCategories/route.ts) | TypeScript | 27 | 13 | 15 | 55 |
| [app/api/createOrder/route.ts](/app/api/createOrder/route.ts) | TypeScript | 21 | 7 | 9 | 37 |
| [app/api/getActiveOrders/route.ts](/app/api/getActiveOrders/route.ts) | TypeScript | 20 | 6 | 13 | 39 |
| [app/api/getAllOrdersByDate/route.ts](/app/api/getAllOrdersByDate/route.ts) | TypeScript | 18 | 3 | 13 | 34 |
| [app/api/getAllOrders/route.ts](/app/api/getAllOrders/route.ts) | TypeScript | 18 | 3 | 13 | 34 |
| [app/api/getAllProducts/route.ts](/app/api/getAllProducts/route.ts) | TypeScript | 18 | 3 | 9 | 30 |
| [app/api/getAllTipsLastWeek/route.ts](/app/api/getAllTipsLastWeek/route.ts) | TypeScript | 36 | 3 | 14 | 53 |
| [app/api/getAllUsers/route.ts](/app/api/getAllUsers/route.ts) | TypeScript | 18 | 3 | 9 | 30 |
| [app/api/getDoesUserExist/[pin]/route.ts](/app/api/getDoesUserExist/%5Bpin%5D/route.ts) | TypeScript | 19 | 4 | 8 | 31 |
| [app/api/getGiftCards/route.ts](/app/api/getGiftCards/route.ts) | TypeScript | 18 | 3 | 9 | 30 |
| [app/api/getProductsFromCategory/[slug]/route.ts](/app/api/getProductsFromCategory/%5Bslug%5D/route.ts) | TypeScript | 18 | 4 | 7 | 29 |
| [app/api/inactiveMenus/route.ts](/app/api/inactiveMenus/route.ts) | TypeScript | 25 | 6 | 9 | 40 |
| [app/components/BottomBar.tsx](/app/components/BottomBar.tsx) | TypeScript JSX | 18 | 11 | 3 | 32 |
| [app/components/BottomBarLink.tsx](/app/components/BottomBarLink.tsx) | TypeScript JSX | 12 | 4 | 4 | 20 |
| [app/components/CategoryListItem.tsx](/app/components/CategoryListItem.tsx) | TypeScript JSX | 28 | 5 | 8 | 41 |
| [app/components/ChangeMenuButton.tsx](/app/components/ChangeMenuButton.tsx) | TypeScript JSX | 32 | 7 | 10 | 49 |
| [app/components/ChangeUserButton.tsx](/app/components/ChangeUserButton.tsx) | TypeScript JSX | 33 | 0 | 8 | 41 |
| [app/components/CurrentOrder.tsx](/app/components/CurrentOrder.tsx) | TypeScript JSX | 102 | 9 | 24 | 135 |
| [app/components/HomeButton.tsx](/app/components/HomeButton.tsx) | TypeScript JSX | 16 | 0 | 2 | 18 |
| [app/components/Item.tsx](/app/components/Item.tsx) | TypeScript JSX | 33 | 6 | 8 | 47 |
| [app/components/ItemGrid.tsx](/app/components/ItemGrid.tsx) | TypeScript JSX | 20 | 10 | 9 | 39 |
| [app/components/KDSTimer.tsx](/app/components/KDSTimer.tsx) | TypeScript JSX | 29 | 19 | 9 | 57 |
| [app/components/OrderItem.tsx](/app/components/OrderItem.tsx) | TypeScript JSX | 24 | 6 | 4 | 34 |
| [app/components/PayModal.tsx](/app/components/PayModal.tsx) | TypeScript JSX | 140 | 0 | 19 | 159 |
| [app/components/StatusUpdateButton.tsx](/app/components/StatusUpdateButton.tsx) | TypeScript JSX | 13 | 5 | 5 | 23 |
| [app/gift-cards/page.tsx](/app/gift-cards/page.tsx) | TypeScript JSX | 70 | 1 | 17 | 88 |
| [app/globals.css](/app/globals.css) | CSS | 14 | 0 | 4 | 18 |
| [app/kitchen/page.tsx](/app/kitchen/page.tsx) | TypeScript JSX | 61 | 31 | 15 | 107 |
| [app/layout.tsx](/app/layout.tsx) | TypeScript JSX | 19 | 0 | 4 | 23 |
| [app/page.tsx](/app/page.tsx) | TypeScript JSX | 25 | 1 | 5 | 31 |
| [app/product-manager/page.tsx](/app/product-manager/page.tsx) | TypeScript JSX | 95 | 2 | 16 | 113 |
| [app/settings/page.tsx](/app/settings/page.tsx) | TypeScript JSX | 18 | 9 | 4 | 31 |
| [app/statistics/page.tsx](/app/statistics/page.tsx) | TypeScript JSX | 127 | 11 | 25 | 163 |
| [app/transaction-log/page.tsx](/app/transaction-log/page.tsx) | TypeScript JSX | 54 | 16 | 12 | 82 |
| [next.config.js](/next.config.js) | JavaScript | 2 | 1 | 2 | 5 |
| [package-lock.json](/package-lock.json) | JSON | 4,873 | 0 | 1 | 4,874 |
| [package.json](/package.json) | JSON | 35 | 0 | 1 | 36 |
| [postcss.config.js](/postcss.config.js) | JavaScript | 6 | 0 | 1 | 7 |
| [prisma/migrations/20240101093040_initial/migration.sql](/prisma/migrations/20240101093040_initial/migration.sql) | SQL | 34 | 6 | 10 | 50 |
| [prisma/migrations/20240101102426_link_categories_to_menus/migration.sql](/prisma/migrations/20240101102426_link_categories_to_menus/migration.sql) | SQL | 4 | 12 | 4 | 20 |
| [prisma/migrations/20240101104817_add_selected_bool_to_menu/migration.sql](/prisma/migrations/20240101104817_add_selected_bool_to_menu/migration.sql) | SQL | 1 | 1 | 1 | 3 |
| [prisma/migrations/20240101104947_rename_selected_to_active/migration.sql](/prisma/migrations/20240101104947_rename_selected_to_active/migration.sql) | SQL | 2 | 7 | 1 | 10 |
| [prisma/migrations/20240104161520_change_default_status_to_new/migration.sql](/prisma/migrations/20240104161520_change_default_status_to_new/migration.sql) | SQL | 1 | 1 | 1 | 3 |
| [prisma/migrations/20240105172902_change_capitalisation_on_statuses/migration.sql](/prisma/migrations/20240105172902_change_capitalisation_on_statuses/migration.sql) | SQL | 1 | 1 | 1 | 3 |
| [prisma/migrations/20240116165945_add_discount_to_order/migration.sql](/prisma/migrations/20240116165945_add_discount_to_order/migration.sql) | SQL | 1 | 1 | 1 | 3 |
| [prisma/migrations/20240116182933_change_to_total_and_subtotal/migration.sql](/prisma/migrations/20240116182933_change_to_total_and_subtotal/migration.sql) | SQL | 3 | 9 | 1 | 13 |
| [prisma/migrations/20240116193246_add_giftcards/migration.sql](/prisma/migrations/20240116193246_add_giftcards/migration.sql) | SQL | 9 | 1 | 2 | 12 |
| [prisma/migrations/20240116193539_add_giftcard_active/migration.sql](/prisma/migrations/20240116193539_add_giftcard_active/migration.sql) | SQL | 1 | 1 | 1 | 3 |
| [prisma/migrations/20240116222016_add_mop/migration.sql](/prisma/migrations/20240116222016_add_mop/migration.sql) | SQL | 1 | 7 | 1 | 9 |
| [prisma/migrations/20240322195706_add_stock_and_on_order_values/migration.sql](/prisma/migrations/20240322195706_add_stock_and_on_order_values/migration.sql) | SQL | 2 | 1 | 1 | 4 |
| [prisma/migrations/20240407190825_add_user_model/migration.sql](/prisma/migrations/20240407190825_add_user_model/migration.sql) | SQL | 11 | 10 | 5 | 26 |
| [prisma/migrations/20240419140030_add_tips/migration.sql](/prisma/migrations/20240419140030_add_tips/migration.sql) | SQL | 10 | 3 | 4 | 17 |
| [prisma/schema.prisma](/prisma/schema.prisma) | Prisma | 77 | 3 | 9 | 89 |
| [tailwind.config.ts](/tailwind.config.ts) | TypeScript | 22 | 0 | 2 | 24 |
| [tsconfig.json](/tsconfig.json) | JSON with Comments | 27 | 0 | 1 | 28 |
| [util/prisma.ts](/util/prisma.ts) | TypeScript | 11 | 7 | 7 | 25 |
| [util/store.ts](/util/store.ts) | TypeScript | 62 | 16 | 2 | 80 |

[Summary](results.md) / Details / [Diff Summary](diff.md) / [Diff Details](diff-details.md)