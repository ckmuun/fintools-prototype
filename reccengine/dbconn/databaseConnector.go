package dbconn

import (
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func init() {
	dsn := "host=localhost user=postgres password=dorban dbname=fintools port=5432 sslmode=disabled "
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		panic(err)
	}

	db.Create("helloWorld")

}
