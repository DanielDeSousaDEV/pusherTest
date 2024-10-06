-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 06/10/2024 às 13:53
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `pusherteste`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(25) NOT NULL,
  `price` int(11) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `id_user`) VALUES
(1, 'Calça Bonita', 20, 18),
(2, 'Boneco do Quincy', 2000, 1),
(3, 'felicidade', 2000, 1),
(4, 'felicidade', 2000, 1),
(5, 'felicidade', 2000, 1),
(6, 'felicidade', 2000, 1),
(7, 'felicidade', 2000, 1),
(8, 'felicidade', 2000, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `sales`
--

CREATE TABLE `sales` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `date_of_sale` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `sales`
--

INSERT INTO `sales` (`id`, `id_user`, `id_product`, `date_of_sale`) VALUES
(1, 1, 1, '2024-09-29 16:00:06'),
(3, 1, 1, '2024-09-29 16:00:41'),
(4, 1, 1, '2024-09-29 16:01:09'),
(5, 1, 1, '2024-09-29 16:03:04'),
(6, 1, 1, '2024-09-29 16:03:31'),
(7, 1, 1, '2024-09-29 16:05:09'),
(8, 1, 1, '2024-09-29 16:06:01'),
(9, 1, 1, '2024-10-06 11:40:07');

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(35) NOT NULL,
  `email` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `users`
--

INSERT INTO `users` (`id`, `name`, `email`) VALUES
(1, 'Mario', 'mario@gmail.com'),
(2, 'Mario', 'mario@gmail.com'),
(3, 'daniel', 'daniel@gmail.com'),
(4, ' ', 'daniel@gmail.com'),
(5, 'gabriel', 'daniel@gmail.com'),
(6, '', 'daniel@gmail.com'),
(7, '', 'daniel@gmail.com'),
(8, '', 'daniel@gmail.com'),
(9, 'talvez', 'daniel@gmail.com'),
(10, '', 'daniel@gmail.com'),
(11, '', 'daniel@gmail.com'),
(12, 'gabriel', 'daniel@gmail.com'),
(13, 'gabriel', 'daniel@gmail.com'),
(14, 'Aline', 'daniel@gmail.com'),
(15, '\', 'daniel@gmail.com'),
(16, '\" OR 1 = 1', 'daniel@gmail.com'),
(17, 'Aline', 'daniel@gmail.com'),
(18, 'Aline', 'daniel@gmail.com'),
(19, 'Aline', 'daniel@gmail.com'),
(20, 'Gabriel', 'gabriel@gmail.com'),
(21, 'Gabriel', 'gabriel@gmail.com'),
(22, 'Gabriel', 'gabriel@gmail.com'),
(23, 'Gabriel', 'gabriel@gmail.com'),
(24, 'Gabriel', 'gabriel@gmail.com'),
(25, 'Gabriel', 'gabriel@gmail.com');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- Índices de tabela `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_product` (`id_product`);

--
-- Índices de tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `sales`
--
ALTER TABLE `sales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);

--
-- Restrições para tabelas `sales`
--
ALTER TABLE `sales`
  ADD CONSTRAINT `sales_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `sales_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
