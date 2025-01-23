# Bank Management System

## Overview
The Bank Management System is a Java-based application designed to manage various banking operations such as account creation, deposits, withdrawals, balance inquiries, and more. The system provides a user-friendly interface for customers to interact with their bank accounts.

## Features
- **Account Creation**: Users can create new bank accounts by providing personal details.
- **Deposits**: Users can deposit money into their accounts.
- **Withdrawals**: Users can withdraw money from their accounts using the Fast Cash feature.
- **Balance Inquiry**: Users can check their account balance.
- **PIN Change**: Users can change their account PIN.
- **Mini Statement**: Users can view a mini statement of their recent transactions.

## Project Structure
The project is organized into several Java classes, each responsible for different functionalities:

- `SignUpOne.java`: Handles the first page of the account creation process.
- `SignUpTwo.java`: Handles the second page of the account creation process.
- `SignUpThree.java`: Handles the third page of the account creation process.
- `Login.java`: Manages user login functionality.
- `Deposit.java`: Manages the deposit functionality.
- `FastCash.java`: Manages the fast cash withdrawal functionality.
- `BalanceEnquiry.java`: Manages the balance inquiry functionality.
- `PinChange.java`: Manages the PIN change functionality.
- `MiniStatement.java`: Displays a mini statement of recent transactions.
- `Conn.java`: Manages the database connection.

## Database
The application uses MySQL as the database to store user information and transaction details. The database connection is managed by the `Conn.java` class.

## How to Run
1. **Setup Database**: Ensure you have MySQL installed and create a database named `bankmanagementsystem`. Import the necessary tables and data.
2. **Configure Database Connection**: Update the database connection details in the `Conn.java` class.
3. **Compile and Run**: Compile the Java files and run the `Login.java` class to start the application.

## Screenshots
Include screenshots of the application here to give users a visual understanding of the interface.

## License
This project is licensed under the MIT License.

## Contact
For any queries or issues, please contact [prajwalrm83@gmail.com].
