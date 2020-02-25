"use strict";

function Button(texture, textureOver) {
    
    this.mBottonTexture = texture;
    this.mBottonTextureOver = textureOver;
    this.mBotton = null;

    this.mPos = null;
    this.mSize = null;


};

Button.prototype.initialize = function(rPos, rWid, rHei){
    
    this.mBotton = new TextureRenderable(this.mBottonTexture);
    this.setSize(rWid, rHei);
    this.setPosition(rPos);
    
};

Button.prototype.draw = function(myCamera){
    this.mBotton.draw(myCamera);
};

Button.prototype.update = function(aCamera){
    //var xMouse = gEngine.Input.getMousePosX();
    //var yMouse = gEngine.Input.getMousePosY();
    var xMouse = aCamera.mouseWCX();
    var yMouse = aCamera.mouseWCY();

    if(xMouse>(this.mPos[0]-0.5*this.mSize[0]) && xMouse<(this.mPos[0]+0.5*this.mSize[0]) 
        && yMouse>(this.mPos[1]-0.5*this.mSize[1]) && yMouse<(this.mPos[1]+0.5*this.mSize[1])){
        this.mBotton.setTexture(this.mBottonTextureOver);
    }   else{
        this.mBotton.setTexture(this.mBottonTexture);
    }
};

Button.prototype.setPosition = function(rPos){
    this.mPos = vec2.fromValues(rPos[0], rPos[1]);
    this.mBotton.getXform().setPosition(rPos[0], rPos[1]);
};

Button.prototype.setSize = function(wid, hei){
    //var textureInfo = this.mBottonTexture.getTextureInfo();
    //var ratioW = textureInfo[1] / textureInfo[0];
    this.mSize = vec2.fromValues(wid, hei);
    //this.mBotton.getXform().setSize(this.mSize[0], this.mSize[1]);
    this.mBotton.getXform().setSize(wid, hei);
};