package server

import (
	"github.com/gin-gonic/gin"
	"reflect"
	"testing"
)

func TestSetupRouter(t *testing.T) {
	tests := []struct {
		name string
		want *gin.Engine
	}{
		// TODO: Add test cases.
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := SetupRouter(); !reflect.DeepEqual(got, tt.want) {
				t.Errorf("SetupRouter() = %v, want %v", got, tt.want)
			}
		})
	}
}

func Test_getQst(t *testing.T) {
	type args struct {
		c *gin.Context
	}
	tests := []struct {
		name string
		args args
	}{
		// TODO: Add test cases.
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
		})
	}
}

func Test_pong(t *testing.T) {
	type args struct {
		c *gin.Context
	}
	tests := []struct {
		name string
		args args
	}{
		// TODO: Add test cases.
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
		})
	}
}

func Test_setupQuestionnaireRoutes(t *testing.T) {
	type args struct {
		router *gin.Engine
	}
	tests := []struct {
		name string
		args args
		want *gin.Engine
	}{
		// TODO: Add test cases.
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := setupQuestionnaireRoutes(tt.args.router); !reflect.DeepEqual(got, tt.want) {
				t.Errorf("setupQuestionnaireRoutes() = %v, want %v", got, tt.want)
			}
		})
	}
}

func Test_setupUserRoutes(t *testing.T) {
	type args struct {
		router *gin.Engine
	}
	tests := []struct {
		name string
		args args
		want *gin.Engine
	}{
		// TODO: Add test cases.
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := setupUserRoutes(tt.args.router); !reflect.DeepEqual(got, tt.want) {
				t.Errorf("setupUserRoutes() = %v, want %v", got, tt.want)
			}
		})
	}
}
