-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 08, 2016 at 09:28 PM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blog`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `title` varchar(256) NOT NULL,
  `description` text NOT NULL,
  `price_type` varchar(10) NOT NULL COMMENT 'FixedOrHourly',
  `level` varchar(25) NOT NULL COMMENT 'Entry_Mid_Advance',
  `estimated_required_time` varchar(256) NOT NULL,
  `fare_amount` float NOT NULL,
  `required_skill` varchar(512) NOT NULL,
  `created_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`_id`, `category_id`, `title`, `description`, `price_type`, `level`, `estimated_required_time`, `fare_amount`, `required_skill`, `created_date`) VALUES
(19, 0, 'Looking for Creative Solutions for Robotic Programming/Design', 'We are looking at mimicking the very basic functionality of typical teppanyaki hibachi chef cooking (not the fancy trick stuff) Know this is a bit complex but what we want here is someone to give us an idea of what hardware/software/time/cost would be needed to achieve it. This is a "test" job for the actual job of which we need full software programming for you. We''ll take care of buying the hardware and such we don''t need to worry about the food or oils dispensing we will take care of that, we need essentially: What types of robotic arms would be needed What types of sensors would be needed What types of cameras would be needed anything else you''d suggest Feel free to suggest example sensors/robotic arms/cameras etc so we can see where u are at. There has been soo much advancement in this sector over the past 24 mo''s alone that something 2 yrs ago is very outdated.. Open to suggestions before accepting the test job..', 'Fixed', 'Advance', '6 Month', 1500, 'JavaScript, Web Design, Website Development', '2016-12-08'),
(20, 0, 'Looking for Creative Solutions for Robotic Programming/Design', 'We are looking at mimicking the very basic functionality of typical teppanyaki hibachi chef cooking (not the fancy trick stuff) Know this is a bit complex but what we want here is someone to give us an idea of what hardware/software/time/cost would be needed to achieve it. This is a "test" job for the actual job of which we need full software programming for you. We''ll take care of buying the hardware and such we don''t need to worry about the food or oils dispensing we will take care of that, we need essentially: What types of robotic arms would be needed What types of sensors would be needed What types of cameras would be needed anything else you''d suggest Feel free to suggest example sensors/robotic arms/cameras etc so we can see where u are at. There has been soo much advancement in this sector over the past 24 mo''s alone that something 2 yrs ago is very outdated.. Open to suggestions before accepting the test job..', 'Fixed', 'Advance', '6 Month', 1500, 'JavaScript, Web Design, Website Development', '2016-12-08'),
(21, 0, 'Product Design & Creation Ecommerce', 'Looking for an individual that is experienced in Wordpress Product creation. I have about 3 to 4 thousand products that need to be created from an online database that we use. Products will be very specific and detailed. Must be detail oriented. Work will be done on a daily basis until the products have been created. Possibility for additional product creation to different platforms after this has been completed.', 'Hourly', 'Entry', '2 month', 3, 'Product Design,Product Development ,Woocommerce', '2016-12-08'),
(22, 4, 'fdh', 'asd', 'Fixed', 'Entry', 'asfd', 45, 'asdf', '2016-12-08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
