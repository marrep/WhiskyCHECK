<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201126170720 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE offer DROP FOREIGN KEY FK_29D6873E4584665A');
        $this->addSql('ALTER TABLE offer CHANGE product_id product_id VARCHAR(255) DEFAULT NULL, CHANGE gtin gtin VARCHAR(255) NOT NULL, CHANGE price price DOUBLE PRECISION NOT NULL, CHANGE shipping_price shipping_price DOUBLE PRECISION NOT NULL');
        $this->addSql('ALTER TABLE offer ADD CONSTRAINT FK_29D6873E4584665A FOREIGN KEY (product_id) REFERENCES product (gtin)');
        $this->addSql('ALTER TABLE product CHANGE gtin gtin VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE offer DROP FOREIGN KEY FK_29D6873E4584665A');
        $this->addSql('ALTER TABLE offer CHANGE product_id product_id INT NOT NULL, CHANGE gtin gtin INT NOT NULL, CHANGE price price INT NOT NULL, CHANGE shipping_price shipping_price INT NOT NULL');
        $this->addSql('ALTER TABLE offer ADD CONSTRAINT FK_29D6873E4584665A FOREIGN KEY (product_id) REFERENCES product (id)');
        $this->addSql('ALTER TABLE product CHANGE gtin gtin INT NOT NULL');
    }
}
