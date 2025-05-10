# Food-Delivery
# Food
🔐 1. Autentifikatsiya
POST /api/auth/register/owner
→ Yangi restoran egasini ro‘yxatdan o‘tkazish.

POST /api/auth/register/customer
→ Yangi mijozni ro‘yxatdan o‘tkazish.

POST /api/auth/register/delivery
→ Yangi dostavkachi xodimni ro‘yxatdan o‘tkazish.

POST /api/auth/login
→ Login qilish va JWT token olish.

🍽 2. Restoranlar
POST /api/restaurant/create
→ Faqat OWNER yangi restoran yaratishi mumkin.

PUT /api/restaurant/:id
→ Faqat OWNER o‘z restoranini yangilashi mumkin.

DELETE /api/restaurant/:id
→ Faqat OWNER o‘z restoranini o‘chirishi mumkin.

GET /api/restaurant
→ Barcha restoranlarni ko‘rish (filtr: ownerId orqali).

GET /api/restaurant/:id
→ Maxsus restoranni ID orqali ko‘rish.

🍔 3. Ovqatlar
POST /api/food/create
→ Faqat OWNER o‘z restoraniga ovqat qo‘shadi.

PUT /api/food/:id
→ Faqat OWNER o‘z ovqatini yangilaydi.

DELETE /api/food/:id
→ Faqat OWNER o‘z ovqatini o‘chiradi.

GET /api/food
→ Barcha ovqatlarni ko‘rish (filtrlar: restaurantId, category, isAvailable).

GET /api/food/:id
→ Maxsus ovqatni ID orqali ko‘rish.

📦 4. Buyurtmalar
POST /api/order/create
→ Faqat CUSTOMER buyurtma beradi.

PATCH /api/order/:id/delivered
→ Faqat DELIVERY PERSON buyurtmani yetkazildi deb belgilaydi.

PATCH /api/order/:id/cancel
→ Faqat CUSTOMER buyurtmasini bekor qiladi.

GET /api/order
→ Buyurtmalarni ko‘rish (filtrlar: status, customerId).

GET /api/order/:id
→ Maxsus buyurtmani ID orqali ko‘rish.
