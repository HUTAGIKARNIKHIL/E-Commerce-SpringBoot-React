# E-Commerce-SpringBoot-React

## Overview
This is a simple e-commerce application built using React.js, React Router, Bootstrap, and Axios for frontend operations. The backend is developed using Spring Boot with a MySQL database. The backend API runs on `http://localhost:8080/` for handling products and cart management.

---
## Features
### Frontend
- Display product list
- Add new products
- Update existing products
- Delete products
- Add products to cart
- Increase/decrease product quantity in cart
- View total amount in cart
- Google Pay integration (Test mode)

### Backend
- REST API for products and cart management
- CRUD operations for products
- Shopping cart operations
- MySQL database integration
- Spring Boot JPA for data persistence

---
## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- Node.js & npm (for frontend)
- Java & Maven (for backend)
- MySQL database

### Steps to Run
#### Clone this repository:
```sh
git clone <repo-url>
cd <project-folder>
```

#### Backend (Spring Boot)
1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Configure database connection in `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/ecommerce_db
   spring.datasource.username=root
   spring.datasource.password=yourpassword
   spring.jpa.hibernate.ddl-auto=update
   ```
3. Build and run the application:
   ```sh
   mvn clean install
   mvn spring-boot:run
   ```

#### Frontend (React)
1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Replace Public and Src
   
4. Start the React application:
   ```sh
   npm start
   ```

---
## Folder Structure
```
project-folder/
│── backend/
│   ├── src/main/java/com/ecommerce/
│   │   ├── entity/
│   │   │   ├── Cart.java
│   │   │   ├── Product.java
│   │   ├── repository/
│   │   │   ├── CartRepo.java
│   │   │   ├── ProductRepo.java
│   │   ├── service/
│   │   │   ├── EcomService.java
│   │   ├── controller/
│   │   │   ├── CartController.java
│   │   │   ├── ProductController.java
│   ├── application.properties
│   ├── pom.xml
│── frontend/
│   ├── src/
│   │   ├── Components/
│   │   │   ├── Home.js
│   │   │   ├── AddProduct.js
│   │   │   ├── UpdateProduct.js
│   │   │   ├── Cart.js
│   │   │   ├── Navbar.js
│   ├── App.js
│   ├── App.css
│── public/
│── package.json
```

---
## API Endpoints

### Products
- `GET /product/displayProducts` - Fetch all products
- `POST /product/addNewProduct` - Add new product
- `PUT /product/updateProduct/{id}` - Update product details
- `DELETE /product/deleteProduct/{id}` - Delete product

### Cart
- `GET /cart/displayCartProducts` - Fetch cart items
- `POST /cart/addToCart/{id}` - Add product to cart
- `POST /cart/increaseCartProduct/{id}` - Increase quantity
- `POST /cart/decreaseCartProduct/{id}` - Decrease quantity

---
## Technologies Used
### Frontend
- React.js
- React Router
- Bootstrap
- Axios

### Backend
- Spring Boot
- Spring Data JPA
- MySQL Database
- Hibernate
- Maven

---
## Author
Developed by [Nikhil Hutagikar]

