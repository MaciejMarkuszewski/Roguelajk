-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: mn15.webd.pl    Database: kajtsweb_lolmaj
-- ------------------------------------------------------
-- Server version	5.5.41-37.0-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `uzytkownicy`
--

DROP TABLE IF EXISTS `uzytkownicy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `uzytkownicy` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` text COLLATE utf8_polish_ci NOT NULL,
  `pass` text COLLATE utf8_polish_ci NOT NULL,
  `email` text COLLATE utf8_polish_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=29 DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `uzytkownicy`
--

LOCK TABLES `uzytkownicy` WRITE;
/*!40000 ALTER TABLE `uzytkownicy` DISABLE KEYS */;
INSERT INTO `uzytkownicy` VALUES (13,'admin','$2y$10$CrTdJI0G6XZrY.yWPDt51OoppsNJL1Fbwe.mXJlML0hM6SRXTXhnG','macmar@op.pl'),(14,'Igna','$2y$10$fasnlNzEqKkQvB6w0aWHHO0YmoSNMsMlnz6qZjzeTWYCBDQi46VPO','igna.dragon@gmail.com'),(15,'IgnaCvaniak','$2y$10$aGW0tzCXRAkftkAt7RG7vOWDvMZmHj3Elu9hCsSx50kPpsC6CR4gy','igna.hunter@gmail.com'),(16,'demon','$2y$10$6uuJ3oY9xTG/Npvoy44A0urBkT6vjBo9aeNzwgiFyrkDUTK5X.rg6','wiktorwksgancarczyk@wp.pl'),(17,'chuj','$2y$10$LHBVX.0Jrwaa.1UUZZr/pO4/NZmOOAb4yl3wUnFy5wuKOiR31/iWm','chuj@op.pl'),(18,'dicoloredrainbow','$2y$10$rlqkEWnA6hSaAzVCjiSGZOlpW1C5Ynq5vgY8GRP1is164QXhB0aiq','roksana098767@gmail.com'),(19,'Zedarrr','$2y$10$V0pU9qCDU5iT4cdCUN0v4.JhZRxu183VqvhE0p3VqYg74of7e11Mq','erag0niak@op.pl'),(20,'Seba','$2y$10$sqvHhjLAL/xc96fC7iv7O.T0kNwjeBvXxrCZzPAo5DdYn2m6FTdoy','filipgr6@gmail.com'),(21,'Zaplecami','$2y$10$X6bZLLkOFzYVEq638rAqVeZfJ21TaZoUESYKPKEtnvtg5ml3/49ti','szustak.m.6@gmail.com'),(22,'Zaplec','$2y$10$geIZsoyhA0ecMcI1ouYfCuf08guHRGdfLBXhK/JQbOmkFft7/9fg2','liuailungwna@gmail.com'),(23,'kanapkazesrem','$2y$10$EZnvLr85Z7ud2YnBkI8vl.dme5TuyaLX4JG1WA2l1oqk.yGOCHEhS','ratajska.magd@gmail.com'),(24,'busz701','$2y$10$9iOcRRkQVyqeKb8qAugS5e.L2bNUngg6M.a9y/IbaVDo6hAtqyAYC','radoslaw.czahajda@gmail.com'),(25,'vector','$2y$10$jpviHrJzzQCvgfZFW10AI.oXs5FMdCNJ2gGrdreMMiM6cgBw8SYWm','japa@wp.pl'),(26,'dekke','$2y$10$JtYTUM8WT6SpQMKYR26nwuBuUa7jTSnppIL7Wdf50jCefLiqgdSoW','maja.cheza@gmail.com'),(27,'Zedar','$2y$10$mUXn8HF4aCetPloMLeeKsuSWR.nmayM4ruHpPV7MZSrHZBEtDV5V6','fajnymail@japa.pl'),(28,'japa','$2y$10$VVv511Jak.tpNh7b5/hFyeWTd7TcCZy2HtjOIiZM0kgrXvuArJMrO','kranik@op.pl');
/*!40000 ALTER TABLE `uzytkownicy` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-06-14 11:49:51
