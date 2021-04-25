package api

import "encoding/base64"

type McAnswerI interface {
	GetAnswer()
	GetValue() int
	GetAnswerTextual() string
}

type PictureMcAnswer struct {
	Shortname string `json:"shortname"`
	Caption   string `json:"caption"`
	Source    string `json:"source"`
	Data      string `json:"data"`

	Value int
}

func (p *PictureMcAnswer) GetAnswerTextual() string {
	return p.Caption
}

func (p *PictureMcAnswer) GetAnswer() []byte {
	bytes, err := base64.StdEncoding.DecodeString(p.Data)

	if err == nil {
		return bytes
	}
	return nil
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
