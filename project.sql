/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : project

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-02-09 16:53:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `qty` int(11) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=39 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '《纳福臻祥图》', '纳福臻祥图典藏组 山水加牡丹组合', '../img/list/1.jpg', '2980.00', null, '1');
INSERT INTO `goods` VALUES ('2', '《家和福顺》', '家和福顺 玉雕画四斗方', '../img/list/2.jpg', '3980.00', null, '1');
INSERT INTO `goods` VALUES ('3', '《江山秋韵图》', '雷鸣东大师 江山秋韵图', '../img/list/3.jpg', '9800.00', null, '1');
INSERT INTO `goods` VALUES ('4', '《泰山旭日图》', '国画大师张惠文 亲自手绘', '../img/list/4.jpg', '3506.00', null, '1');
INSERT INTO `goods` VALUES ('5', '《鸟语花香》', '鸟语花香 斗方 向仕平老师亲绘', '../img/list/5.jpg', '1580.00', null, '1');
INSERT INTO `goods` VALUES ('6', '《传世珍邮》', '中国十大名画珍邮 货号120400', '../img/list/6.jpg', '3980.00', null, '1');
INSERT INTO `goods` VALUES ('7', '硬币流通金属币', '中国流通金属币 跨度长收集', '../img/list/7.jpg', '2980.00', null, '1');
INSERT INTO `goods` VALUES ('8', '最佳邮票十年大全', '中国最佳邮票 十年大全', '../img/list/8.jpg', '3980.00', null, '1');
INSERT INTO `goods` VALUES ('9', '《时运亨通》', '吉祥花鸟图 书法绘画双料大师 李智慧亲绘', '../img/list/9.jpg', '1980.00', null, '1');
INSERT INTO `goods` VALUES ('10', '首轮生肖邮票足银四方连', '首轮生肖邮票 足银四方连', '../img/list/10.jpg', '1680.00', null, '1');
INSERT INTO `goods` VALUES ('11', '首轮生肖邮票', '首轮生肖邮票 足金四方连', '../img/list/11.jpg', '6800.00', null, '1');
INSERT INTO `goods` VALUES ('12', '《名犬珍邮》', '戊戌生肖邮票大全', '../img/list/12.jpg', '2980.00', null, '1');
INSERT INTO `goods` VALUES ('13', '福满四季金雕画', '福满四季金属雕刻画', '../img/list/13.jpg', '3680.00', null, '1');
INSERT INTO `goods` VALUES ('14', '《名犬珍邮》', '戊戌生肖邮票大全', '../img/list/1.jpg', '2980.00', null, '1');
INSERT INTO `goods` VALUES ('15', '《时运亨通》', '吉祥花鸟图 书法绘画双料大师 李智慧亲绘', '../img/list/2.jpg', '1980.00', null, '1');
INSERT INTO `goods` VALUES ('16', '《传世珍邮》', '中国十大名画珍邮 货号120400', '../img/list/3.jpg', '3980.00', null, '1');
INSERT INTO `goods` VALUES ('17', '《泰山旭日图》', '国画大师张惠文 亲自手绘', '../img/list/8.jpg', '3506.00', null, '1');
INSERT INTO `goods` VALUES ('18', '首轮生肖邮票', '首轮生肖邮票 足金四方连', '../img/list/12.jpg', '6800.00', null, '1');
INSERT INTO `goods` VALUES ('19', '《传世珍邮》', '中国十大名画珍邮 货号120400', '../img/list/3.jpg', '3980.00', null, '1');
INSERT INTO `goods` VALUES ('20', '《泰山旭日图》', '国画大师张惠文 亲自手绘', '../img/list/8.jpg', '3506.00', null, '1');
INSERT INTO `goods` VALUES ('21', '首轮生肖邮票', '首轮生肖邮票 足金四方连', '../img/list/12.jpg', '6800.00', null, '1');
INSERT INTO `goods` VALUES ('22', '最佳邮票十年大全', '中国最佳邮票 十年大全', '../img/list/8.jpg', '3980.00', null, '1');
INSERT INTO `goods` VALUES ('23', '《名犬珍邮》', '戊戌生肖邮票大全', '../img/list/1.jpg', '2980.00', null, '1');
INSERT INTO `goods` VALUES ('24', '《时运亨通》', '吉祥花鸟图 书法绘画双料大师 李智慧亲绘', '../img/list/2.jpg', '1980.00', null, '1');
INSERT INTO `goods` VALUES ('25', '《传世珍邮》', '中国十大名画珍邮 货号120400', '../img/list/3.jpg', '3980.00', null, '1');
INSERT INTO `goods` VALUES ('26', '奥运珍邮大全', '历届奥运珍邮大全 货号121756', '../img/list/1.jpg', '12800.00', null, '1');
INSERT INTO `goods` VALUES ('27', '千里江山图', '故宫千里江山图 丝绸钞券版', '../img/list/2.jpg', '5950.00', null, '1');
INSERT INTO `goods` VALUES ('28', '金狗旺夫', '生肖大师纪念银章', '../img/list/3.jpg', '3980.00', null, '1');
INSERT INTO `goods` VALUES ('29', '十二生肖高浮雕', '十二生肖高浮雕 银制纪念章', '../img/list/15.jpg', '9800.00', null, '1');
INSERT INTO `goods` VALUES ('30', '名犬珍邮', '戊戌生肖邮票大全', '../img/list/14.jpg', '2980.00', null, '1');
INSERT INTO `goods` VALUES ('31', '金狗旺夫', '生肖大师纪念银章', '../img/list/15.jpg', '3980.00', null, '1');
INSERT INTO `goods` VALUES ('32', '奥运珍邮大全', '历届奥运珍邮大全 货号121756', '../img/list/1.jpg', '12800.00', null, '1');
INSERT INTO `goods` VALUES ('34', '最佳邮票十年大全', '国画大师张惠文 亲自手绘', '../img/list/10.jpg', '3506.00', null, '1');
INSERT INTO `goods` VALUES ('36', '福满四季金雕画', '福满四季金属雕刻画', '../img/list/13.jpg', '3680.00', null, '1');
INSERT INTO `goods` VALUES ('37', '《鸟语花香》', '鸟语花香 斗方 向仕平老师亲绘', '../img/list/5.jpg', '1580.00', null, '1');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `username` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('jess', '0');
INSERT INTO `user` VALUES ('jess1', '1');
INSERT INTO `user` VALUES ('jess2', '2');
INSERT INTO `user` VALUES ('jess3', '3');
INSERT INTO `user` VALUES ('jess4', '4');
INSERT INTO `user` VALUES ('jess5', '5');
INSERT INTO `user` VALUES ('jess6', '6');
SET FOREIGN_KEY_CHECKS=1;
