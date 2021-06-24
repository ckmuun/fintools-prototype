package utils

import "io/ioutil"

func LoadJsonFileIntoByteArr(filename string) []byte {
	file, err := ioutil.ReadFile(filename)

	if err != nil {
		panic("could not load file into byte array")
	}

	return file
}
