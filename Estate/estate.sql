-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 05, 2024 at 02:57 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `estate`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `cart_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `total_price` int(11) DEFAULT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `Cat_Id` int(11) NOT NULL,
  `Category` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`Cat_Id`, `Category`) VALUES
(0, ''),
(1, 'Flats'),
(2, 'Rents'),
(3, 'Plot'),
(4, 'Furnished Home');

-- --------------------------------------------------------

--
-- Table structure for table `contact_us`
--

CREATE TABLE `contact_us` (
  `id` int(11) NOT NULL,
  `firstname` varchar(200) DEFAULT NULL,
  `lastname` varchar(200) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact_us`
--

INSERT INTO `contact_us` (`id`, `firstname`, `lastname`, `email`, `phone`) VALUES
(1, 'asfand', 'shahmeer', 'muhammad@gmail.com', '1234567');

-- --------------------------------------------------------

--
-- Table structure for table `order_manager`
--

CREATE TABLE `order_manager` (
  `id` int(11) NOT NULL,
  `Full_Name` varchar(100) DEFAULT NULL,
  `Phone_No` int(11) DEFAULT NULL,
  `Address` varchar(100) DEFAULT NULL,
  `Pay_Mode` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `prod_id` int(11) NOT NULL,
  `prodname` varchar(100) NOT NULL,
  `prodprice` int(11) NOT NULL,
  `prodimage` varchar(255) NOT NULL,
  `Prod_Desc` varchar(255) NOT NULL,
  `Prod_Category` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`prod_id`, `prodname`, `prodprice`, `prodimage`, `Prod_Desc`, `Prod_Category`) VALUES
(1, 'Smart Watch', 6700, 'assets/images/smartwatch.png', 'Shophive is the best place to buy Smart Watches in Pakistan and you can find them at lowest price. ', NULL),
(4, 'Smart watch', 780, 'assets/images/smartwatch2.webp', 'Shophive is the best place to buy Smart Watches in Pakistan and you can find them at lowest price. ', NULL),
(5, 'Smart Watch', 6800, 'assets/images/smartwatch3.gif', 'Shophive is the best place to buy Smart Watches in Pakistan and you can find them at lowest price.', NULL),
(6, 'Smart Watch', 670, 'assets/images/smartwatch4.webp', 'Shophive is the best place to buy Smart Watches in Pakistan and you can find them at lowest price.', NULL),
(7, 'Smart Watch', 4000, 'assets/images/watch5.jpg', 'Shophive is the best place to buy Smart Watches in Pakistan and you can find them at lowest price.', NULL),
(8, 'Smart Watch', 4000, 'assets/images/watch6.jpg', 'Shophive is the best place to buy Smart Watches in Pakistan and you can find them at lowest price.', NULL),
(9, 'Smart Watch', 4000, 'assets/images/watch7.jpg', 'Shophive is the best place to buy Smart Watches in Pakistan and you can find them at lowest price.', NULL),
(10, 'Smart Watch', 7000, 'assets/images/watch8.jpg', 'Shophive is the best place to buy Smart Watches in Pakistan and you can find them at lowest price.', NULL),
(11, 'Smart Watch', 7000, 'assets/images/watch9.jpg', 'Shophive is the best place to buy Smart Watches in Pakistan and you can find them at lowest price.', NULL),
(12, 'Smart Watch', 7000, 'assets/images/watch10.jpg', 'Shophive is the best place to buy Smart Watches in Pakistan and you can find them at lowest price.', NULL),
(13, 'Smart Watch', 5670, 'assets/images/watch11.jpg', 'Shophive is the best place to buy Smart Watches in Pakistan and you can find them at lowest price.', NULL),
(15, 'Smart Watch', 5670, 'assets/images/smartwatch12.webp', 'Shophive is the best place to buy Smart Watches in Pakistan and you can find them at lowest price.', NULL),
(16, 'Smart Phone', 67000, 'assets/images/mobile1.webp', 'Get your hands on the hottest smartphones in Pakistan at MyShop.PK', NULL),
(17, 'Smart Phone', 67000, 'assets/images/mobile2.webp', 'Get your hands on the hottest smartphones in Pakistan at MyShop.PK', NULL),
(18, 'Smart Phone', 67000, 'assets/images/mobile3.webp', 'Get your hands on the hottest smartphones in Pakistan at MyShop.PK', NULL),
(19, 'Smart Phone', 30000, 'assets/images/mobile4.png', 'Get your hands on the hottest smartphones in Pakistan at MyShop.PK', NULL),
(20, 'Smart Phone', 30500, 'assets/images/mobile5.png', 'Get your hands on the hottest smartphones in Pakistan at MyShop.PK', NULL),
(21, 'Smart Phone', 30500, 'assets/images/mobile6.png', 'Get your hands on the hottest smartphones in Pakistan at MyShop.PK', NULL),
(22, 'Smart Phone', 30500, 'assets/images/mobile7.webp', 'Get your hands on the hottest smartphones in Pakistan at MyShop.PK', NULL),
(23, 'Smart Phone', 50, 'assets/images/mobile8.webp', 'Get your hands on the hottest smartphones in Pakistan at MyShop.PK', NULL),
(24, 'Airbuds', 800, 'assets/images/AP 01.png', 'Audionic is the largest distributor of Wireless Earbuds in Pakistan.', NULL),
(25, 'Airbuds', 800, 'assets/images/AP 02.png', 'Audionic is the largest distributor of Wireless Earbuds in Pakistan.', NULL),
(53, 'Shoes', 6003, 'assets/images/shoe2.jpeg', 'Fully Lined Supple Glove Leather Interior .', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `purchase`
--

CREATE TABLE `purchase` (
  `id` int(11) NOT NULL,
  `username` varchar(200) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `contact` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `purchase`
--

INSERT INTO `purchase` (`id`, `username`, `address`, `contact`) VALUES
(6, 'muhammad asfahan', 'ORangi town karachi ', ''),
(7, 'asfand', 'karachi', '1230456789');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `passwordd` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `Phone` varchar(11) NOT NULL,
  `role` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `email`, `passwordd`, `address`, `Phone`, `role`) VALUES
(3, 'Ibrahim', 'xyz@gmail.com', 'abc123', 'lahore', '12345678908', 2),
(5, 'asfand', 'xyz@gmail.com', '123', 'lahore', '12345678988', 2),
(7, 'Mubsir', 'mubsir@gmail.com', 'mubsir', 'I block', '03172239904', 2),
(20, 'hina', 'hina@gmail.com', 'hina', 'home', '09876546666', 2),
(21, 'Anus', 'anus@gmail.com', 'anus', 'home', '0312890973', 2),
(22, 'hassan', 'hassan@gmail.com', 'hasan', 'Hadeed', '0987654567', 2),
(25, 'admin', 'admin@gmail.com', 'estate', 'home', '4754354093', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_orders`
--

CREATE TABLE `user_orders` (
  `id` int(11) NOT NULL,
  `Order_Id` int(11) DEFAULT NULL,
  `Item_Name` varchar(200) DEFAULT NULL,
  `Price` int(11) DEFAULT NULL,
  `Quantity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_role`
--

CREATE TABLE `user_role` (
  `role_id` int(11) NOT NULL,
  `role_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_role`
--

INSERT INTO `user_role` (`role_id`, `role_name`) VALUES
(1, 'Admin'),
(2, 'User');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`Cat_Id`);

--
-- Indexes for table `contact_us`
--
ALTER TABLE `contact_us`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_manager`
--
ALTER TABLE `order_manager`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`prod_id`),
  ADD KEY `Prod_Category` (`Prod_Category`);

--
-- Indexes for table `purchase`
--
ALTER TABLE `purchase`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `role` (`role`);

--
-- Indexes for table `user_orders`
--
ALTER TABLE `user_orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_role`
--
ALTER TABLE `user_role`
  ADD PRIMARY KEY (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `Cat_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `contact_us`
--
ALTER TABLE `contact_us`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `order_manager`
--
ALTER TABLE `order_manager`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `prod_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `purchase`
--
ALTER TABLE `purchase`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `user_orders`
--
ALTER TABLE `user_orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_role`
--
ALTER TABLE `user_role`
  MODIFY `role_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`Prod_Category`) REFERENCES `categories` (`Cat_Id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role`) REFERENCES `user_role` (`role_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
