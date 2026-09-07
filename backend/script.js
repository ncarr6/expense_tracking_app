/*const script = 'CREATE TABLE expenseappuser (
    id SERIAL NOT NULL PRIMARY KEY,
    email VARCHAR(120) UNIQUE NOT NULL,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50),
    contact VARCHAR(15),
    accounts TEXT[],
    password TEXT,
    currency VARCHAR(5) NOT NULL DEFAULT 'USD',
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)
    

CREATE TABLE financial_account (
    financial_account_id SERIAL NOT NULL PRIMARY KEY,
    account_name VARCHAR (50) UNIQUE,
    last_four_digits INT NOT NULL,
    user_id INT,
    CONSTRAINT CHK_FourDigits CHECK (last_four_digits BETWEEN 1000 AND 9999),
    FOREIGN KEY (user_id) REFERENCES expenseappuser(id));'


CREATE TABLE transaction (
    transaction_id SERIAL NOT NULL PRIMARY KEY,
    user_id INT,
    parent_transaction_id INT,
    financial_account_id INT,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    transaction_date DATE DEFAULT CURRENT_DATE,
    budget_date NOT NULL DEFAULT CURRENT_DATE,
    amount DECIMAL(20,2),
    description VARCHAR(255),
    category INT,
    FOREIGN KEY (category) REFERENCES category(category_id),
    FOREIGN KEY (parent_transaction_id) REFERENCES transaction(transaction_id),
    FOREIGN KEY (user_id) REFERENCES expenseappuser(id),
    FOREIGN KEY (financial_account_id) REFERENCES financial_account(financial_account_id));

)


   //transaction date is when the amount was deducted from the account 
   //budget date allows user to control which month the expense should be counted against 
   //because I operate that way

   //if I take money out from schwab, does that spending go to cash account?
    //transaction type as cash withdrawl. it should not be deducted from ledger 

CREATE TABLE category (
    category_id SERIAL NOT NULL PRIMARY KEY, 
    parent_category INT,
    category_name VARCHAR(50),
    category_description VARCHAR(255),
    FOREIGN KEY (parent_category) REFERENCES category(category_id)
);



//can insert default skeleton category records 

user_layout_settings

    type: page/global (restricted set) 
    details: 

    page setting looks up to a parent page setting
    so we have a standard number of pages
    dashboard
    month list view
    month view 
    "x" category list view 


    standard widgets built out for dashboard to select and delete 
    and multiple user settings can hook into one widget


    I need a junction table 





*/


