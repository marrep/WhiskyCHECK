<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201126172331 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE offer (id INT AUTO_INCREMENT NOT NULL, product_id VARCHAR(255) DEFAULT NULL, gtin VARCHAR(255) NOT NULL, price DOUBLE PRECISION NOT NULL, shipping_price DOUBLE PRECISION NOT NULL, delivery_time INT NOT NULL, seller VARCHAR(255) NOT NULL, on_stock TINYINT(1) NOT NULL, INDEX IDX_29D6873E4584665A (product_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE product (id INT AUTO_INCREMENT NOT NULL, gtin VARCHAR(255) NOT NULL, title VARCHAR(255) NOT NULL, brand VARCHAR(255) NOT NULL, image VARCHAR(255) DEFAULT NULL, description VARCHAR(255) DEFAULT NULL, size INT NOT NULL, volume INT NOT NULL, origin VARCHAR(255) DEFAULT NULL, taste LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', category VARCHAR(255) DEFAULT NULL, genre VARCHAR(255) DEFAULT NULL, level VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE offer ADD CONSTRAINT FK_29D6873E4584665A FOREIGN KEY (product_id) REFERENCES product (gtin)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE offer DROP FOREIGN KEY FK_29D6873E4584665A');
        $this->addSql('DROP TABLE offer');
        $this->addSql('DROP TABLE product');
    }
}
