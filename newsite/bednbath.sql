-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 03, 2024 at 09:51 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bednbath`
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
(1, 'BedSheets'),
(2, 'Towels'),
(3, 'Qulit Cover'),
(4, 'Comforter Set'),
(5, 'Shop');

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
(65, 'Bedsheet', 8000, 'assets/images/bedsheet 1.jpeg', 'Best Quality', 1),
(66, 'Bedsheet', 49000, 'assets/images/bedsheet 2.jpeg', 'Best Quality', 1),
(67, 'Towel', 0, 'assets/images/towel1.jpg', 'Best Quality', 2),
(68, 'BedSheet', 6000, 'assets/images/bedsheet 3.jpeg', 'Best Quality', 1),
(69, 'Comforter Set', 56700, 'assets/images/img 1.jpeg', 'Best Quality', 4),
(70, 'Quilt Cover', 3422, 'assets/images/quilt 1.jpg', 'Best Quality', 3),
(71, 'Bedsheet', 25000, 'assets/images/bedsheet 4.jpeg', 'Best qualiy', 1);

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
(7, 'asfand', 'karachi', '1230456789'),
(8, 'Ibrahim', 'Nagan', '234234'),
(14, 'hina', 'home', '32823');

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
(3, 'Ibrahim1', 'xyz@gmail.com', 'abc123', 'lahoreeee', '12345678908', 2),
(5, 'Asfhan', 'asfhan@gmail.com', '098', 'lahore', '12345678988', 2),
(6, 'admin', 'admin@gmail.com', 'admin123', 'karachi', '03124567894', 1),
(7, 'Mubsir', 'mubsir@gmail.com', 'mubsir', 'I block', '03172239904', 2),
(9, 'Arbaz', 'arbaz@gmail.com', '6767', 'aotech', '7654', 1),
(10, 'talha', 'talha@gmail.com', 'talha', 'new', '98768868686', 2),
(11, 'hina', 'hina@gmail.com', 'hina', '234567', '0987654', 2),
(12, 'jannat', 'jannat@gmail.com', 'janat', 'home', '98765', 2),
(13, 'anus', 'anus@gmail.com', 'anus', 'hme', '09876876', 2),
(14, 'Imran', 'imran@gmail.com', 'imran', 'home', '0987654', 1),
(15, 'niazi', 'nizazi@gmail.com', '234', '2345', '2334', 1),
(16, 'xubi', 'xubi@gmail.com', 'xubi', 'home', '098765', NULL),
(17, 'Ibrahim', 'xyz@gmail.com', '112233', 'street', '12345678988', 2),
(18, 'kuch bhiii', 'kuchbhi@gmail.com', 'kuchbhi', 'lahore', '090078601', 2),
(20, 'Anuu', 'anuu@gmail.com', 'anuu', 'home', '12344667899', 2),
(21, 'noad', 'noad@gmail.com', 'noad', 'homee', '92381947', 2);

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
  MODIFY `prod_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT for table `purchase`
--
ALTER TABLE `purchase`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

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
