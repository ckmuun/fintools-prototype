package api

import "io/ioutil"

type McAnswerI interface {
	GetAnswer()
	GetValue() int
	GetAnswerTextual() string
}

type PictureMcAnswer struct {
	Picture  []byte `json:"picture"`
	Filepath string `json:"filepath"`
	Caption  string `json:"caption"`
	Source   string `json:"source"`
	Value    int
}

func (p *PictureMcAnswer) GetAnswerTextual() string {
	return p.Caption
}

func (p *PictureMcAnswer) GetAnswer() []byte {
	if nil == p.Picture {
		file, err := ioutil.ReadFile(p.Filepath)

		if err != nil {
			panic(err)
		}
		p.Picture = file

		return file
	}

	return p.Picture
}

func (p *PictureMcAnswer) GetValue() int {
	return p.Value
}

type TextMcAnswer struct {
	AnswerText string
	Value      int
}

func (tmca *TextMcAnswer) GetAnswer() string {
	return tmca.AnswerText
}

func (tmca *TextMcAnswer) GetValue() int {
	return tmca.Value
}
