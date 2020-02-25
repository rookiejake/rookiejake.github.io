/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*
 * File: MyGame.js 
 * This is the logic of our game. 
 */

/*jslint node: true, vars: true */
/*global gEngine, Scene, GameObjectset, TextureObject, Camera, vec2,
  FontRenderable, SpriteRenderable, LineRenderable,
  GameObject */
/* find out more about jslint: http://www.jslint.com/help.html */

"use strict";  // Operate in Strict mode such that variables must be declared before used!

function Levelx() {
       
    this.kPlatformTexture = "assets/platform.png";
    this.kWallTexture = "assets/wall.png";
    this.kTargetTexture = "assets/target.png";
    this.kSquare="assets/box.png";
    this.kCloud="assets/cloud.png";
    this.kCloud1="assets/cloud1.png";
    this.kBallon="assets/ballon.png";
    this.kStair="assets/stair.png";
    this.kStone="assets/stone.png";
    this.kSign="assets/xjjh.png";
    this.kRoad="assets/Road.png";
    this.kCloud_t="assets/cloud_t.png";
    this.kSquare_t="assets/square_t.png";
    this.kHeroSprite="assets/hero_sprite.png";
    this.kBg="assets/background.png";
    this.kPlayagain="assets/tips.png";
    this.klevel1pic="assets/level4pic.png";
    
    this.mState=0;
    
    
    this.mSquare=null;
    this.mCloud=null;
    this.mCloud1=null;
    this.mBallon=null;
    this.mRoad1=null;
    this.mRoad2=null;
    this.mStone=null;
    this.mSstone=null;
    this.mStair=null;
    this.mSign=null;
    this.mHero = null;
    this.mBg=null;
    this.mCloudt=null;
    this.mSquaret=null;
    this.mPlayagain=null;
    this.mlevel1pic=null;
    
    
    this.mAllObjs = null;
    this.mNonRigid=null;
    
    
    this.mCamera = null;

    this.mMsg = null;
    this.mLevelMsg = null;
    
    this.mHelpMsg = null;
    
    this.isdead=0;
    this.isdown=0;
    this.time1=0;
    this.time2=201;
    this.time= new Date();
    this.wait2s = 0;
    this.sstonedead = 0;
    this.stonesize = 17;
    
}
gEngine.Core.inheritPrototype(Levelx, Scene);


Levelx.prototype.loadScene = function () {
    gEngine.Textures.loadTexture(this.kPlatformTexture);
    gEngine.Textures.loadTexture(this.kWallTexture);
    gEngine.Textures.loadTexture(this.kTargetTexture);
    gEngine.Textures.loadTexture(this.kSquare);
    gEngine.Textures.loadTexture(this.kCloud);
    gEngine.Textures.loadTexture(this.kCloud1);
    gEngine.Textures.loadTexture(this.kBallon);
    gEngine.Textures.loadTexture(this.kStair);
    gEngine.Textures.loadTexture(this.kStone);
    gEngine.Textures.loadTexture(this.kSign);
    gEngine.Textures.loadTexture(this.kHeroSprite);
    gEngine.Textures.loadTexture(this.kRoad);
    gEngine.Textures.loadTexture(this.kCloud_t);
    gEngine.Textures.loadTexture(this.kSquare_t);
    gEngine.Textures.loadTexture(this.kPlayagain);
    gEngine.Textures.loadTexture(this.klevel1pic);
            
};

Levelx.prototype.unloadScene = function () {
    
    gEngine.Textures.unloadTexture(this.kPlatformTexture);
    gEngine.Textures.unloadTexture(this.kWallTexture);
    gEngine.Textures.unloadTexture(this.kTargetTexture);
    gEngine.Textures.unloadTexture(this.kSquare);
    gEngine.Textures.unloadTexture(this.kCloud);
    gEngine.Textures.unloadTexture(this.kCloud1);
    gEngine.Textures.unloadTexture(this.kBallon);
    gEngine.Textures.unloadTexture(this.kStair);
    gEngine.Textures.unloadTexture(this.kStone);
    gEngine.Textures.unloadTexture(this.kSign);
    gEngine.Textures.unloadTexture(this.kHeroSprite);
    gEngine.Textures.unloadTexture(this.kRoad);
    gEngine.Textures.unloadTexture(this.kCloud_t);
    gEngine.Textures.unloadTexture(this.kSquare_t);
    gEngine.Textures.unloadTexture(this.kPlayagain);
    gEngine.Textures.unloadTexture(this.klevel1pic);
    
    
    var nextlevel=null;
    
    if(this.mHero.sta===1)
        {nextlevel=new Level3();}
    if(this.mHero.sta===2)
        {nextlevel=new Levelx();}
    if(this.mHero.sta===3)
        {nextlevel=new ChooseLevel();}    
    gEngine.Core.startScene(nextlevel);
    
    
};

Levelx.prototype.initialize = function () {
    // Step A: set up the cameras
    this.mCamera = new Camera(
        vec2.fromValues(50, 40), // position of the camera
        100,                     // width of camera
        [0, 0, 1500, 600]         // viewport (orgX, orgY, width, height)
    );
    this.mCamera.setBackgroundColor([0.8, 0.8, 0.8, 1]);
            // sets the background to gray
    gEngine.DefaultResources.setGlobalAmbientIntensity(3);
      
    this.mAllObjs = new GameObjectSet();
    this.mNonRigid = new GameObjectSet();
    
    
    //this.createBounds();    
    
    this.mCloud=new Cloud(this.kCloud,65,54.5,16,9.14);
    this.mCloud1=new Cloud_1(this.kCloud1,35,44,10,6.25);
    this.mSquare=new Square(this.kSquare,45,37,5,5);
    this.mSquare1=new Square(this.kSquare,55,47,5,5);
    this.mBallon=new Ballon(this.kBallon,10,35,5,10);
    this.mSign=new Sign(this.kSign,15,55,24,8);
    this.mStair=new Stair(this.kStair,94,33,10,13);
    this.mStone=new Stone(this.kStone,72,35,17,17);
    this.mSstone=new Stone(this.kStone,50,30,6,6);
    this.mHero=new Hero(this.kHeroSprite);
    this.mPlayagain = new Playagain(this.kPlayagain, 50,40,40,20);
    this.mlevel1pic = new Playagain(this.klevel1pic,50,40,40,20);
    
    
    this.mRoad1=new Road(this.kRoad,12,14,28,26);
    this.mRoad2=new Road(this.kRoad,70,14,65,26);
    this.mCloudt=new Cloud_t(this.kCloud_t,65,54.5,18,10.2);
    this.mSquaret=new Squaret(this.kSquare_t,45,37,4.8,4.8);
    this.mSquaret.getRenderable().setElementUVCoordinate(0.15, 0.85,0.1,0.9);
    
    this.mCloudt.setVisibility(0);
    this.mSquaret.setVisibility(0);
    this.mPlayagain.setVisibility(0);
    this.mlevel1pic.setVisibility(1);
    
    //this.mSstone.getRigidBody().setMass(0);
    this.mSstone.getRigidBody().setFriction(0.2);
    this.mRoad2.getRigidBody().setFriction(0.2);

    this.mAllObjs.addToSet(this.mStone);
    this.mAllObjs.addToSet(this.mSstone);
    this.mAllObjs.addToSet(this.mSquare);
    this.mAllObjs.addToSet(this.mSquare1);
    this.mAllObjs.addToSet(this.mSquaret);
    this.mAllObjs.addToSet(this.mRoad1);
    this.mAllObjs.addToSet(this.mRoad2);
    this.mAllObjs.addToSet(this.mHero);
  
    this.mNonRigid.addToSet(this.mSign);
    this.mNonRigid.addToSet(this.mCloud1);
    this.mNonRigid.addToSet(this.mCloud);
    this.mNonRigid.addToSet(this.mBallon);
    this.mNonRigid.addToSet(this.mStair);
    this.mNonRigid.addToSet(this.mCloudt);
    
    this.mMsg = new FontRenderable("Heavy");
    this.mMsg.setColor([0, 0, 0, 1]);
    this.mMsg.getXform().setPosition(70, 35);
    this.mMsg.setTextHeight(2);
    
    this.mLevelMsg = new FontRenderable("Level 4");
    this.mLevelMsg.setColor([0, 0, 0, 1]);
    this.mLevelMsg.getXform().setPosition(94, 58);
    this.mLevelMsg.setTextHeight(1.5);
    
    this.mHelpMsg = new FontRenderable("'KILL' the smaller stone!");
    this.mHelpMsg.setColor([0, 0, 0, 1]);
    this.mHelpMsg.getXform().setPosition(50, -26);
    this.mHelpMsg.setTextHeight(2);

};


// This is the draw function, make sure to setup proper drawing environment, and more
// importantly, make sure to _NOT_ change any state.
Levelx.prototype.draw = function () {
    // Step A: clear the canvas
    gEngine.Core.clearCanvas([0.9, 0.9, 0.9, 1.0]); // clear to light gray

    this.mCamera.setupViewProjection();
       

    
    // for now draw these ...
    /*for (var i = 0; i<this.mCollisionInfos.length; i++) 
        this.mCollisionInfos[i].draw(this.mCamera); */
    this.mCollisionInfos = []; 
    this.mNonRigid.draw(this.mCamera);
    this.mAllObjs.draw(this.mCamera);
    this.mPlayagain.draw(this.mCamera);
    this.mlevel1pic.draw(this.mCamera);
    
    this.mMsg.draw(this.mCamera);
    this.mLevelMsg.draw(this.mCamera);
    this.mHelpMsg.draw(this.mCamera);
    
};



// The Update function, updates the application state. Make sure to _NOT_ draw
// anything from this function!


Levelx.prototype.update = function () {
    if(this.wait2s < 60)
        this.wait2s +=1;
    else
        this.mlevel1pic.setVisibility(0);
    
    
    var xformsstone = this.mSstone.getXform();
    var sstoneypos = xformsstone.getYPos();
    
    
    
    if(sstoneypos < 0)
    {
        this.sstonedead = 1;
    }
    
if(sstoneypos < 29.8)
    {
        this.isdown=1;
    }
    
if(this.isdown)
    this.mSstone.getRigidBody().setMass(1);
    
    var xformmsg = this.mMsg.getXform();
    
    if(this.sstonedead === 1 && this.stonesize > 7){
        this.stonesize -= 0.2;
        var xformstone = this.mStone.getXform();
        xformstone.setSize(this.stonesize,this.stonesize);
        xformstone.incXPosBy(-0.1);
        xformstone.incYPosBy(-0.1);
        xformmsg.incYPosBy(-0.1);
        xformmsg.incXPosBy(-0.1);
        this.mStone.getRigidBody().incShapeSizeBy(-0.2);
        this.mStone.update(this.mCamera);
    }
    
    
    this.mBallon.rotateObjPointTo(this.mHero.getXform().getPosition(), 1,5);
    
    var xform = this.mHero.getXform();
    var xpos = xform.getXPos();
    var ypos = xform.getYPos();
    
    var x=this.mSstone.getXform().getXPos();
    var y=this.mSstone.getXform().getYPos();
    
    if(!this.isdown)
        this.mSstone.getRigidBody().setMass(0);
    
    if(xpos>=x-5 && xpos<x+5 && ypos===30.25 )
    {this.mSstone.getRigidBody().setMass(10);
    }
    
        
    console.log(this.mSstone.getRigidBody().getInvMass());
    console.log("ok"+this.mSstone.getXform().getPosition());


    if(xpos<=65 && xpos>=57 && ypos>47 && !this.isdead) {
        this.mHero.sta=2;
        this.mCloudt.setVisibility(1);
        this.mHero.mode=10;
        this.isdead=1;
        this.time1=this.time.getMilliseconds();
        this.time2=this.time1;         
    }
       
    this.mAllObjs.update(this.mCamera);    
    gEngine.Physics.processCollision(this.mAllObjs, []);
    this.mNonRigid.update(this.mCamera);   
    
    var xsquare=this.mSquare.getXform().getXPos();
    
    if(xpos>xsquare-2 && xpos<xsquare+2 && ypos===31.25 && !this.isdead)
    {
        this.mHero.sta=2;
        this.mHero.mode=10;
        this.isdead=1;
        this.mHero.getRigidBody().setMass(0);
        this.mSquare.setVisibility(0);
        this.mSquaret.setVisibility(1);        
        this.time1=this.time.getMilliseconds();
        this.time2=this.time1;        
    }
    
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.H)) {
        this.mHelpMsg.getXform().setYPos(26);
        
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.C)) {
        this.mHero.sta=3;
        gEngine.GameLoop.stop();
    }
    if(ypos<=21 && !this.isdead) { 
        this.mHero.mode=10;
        this.isdead=1;
        this.mHero.sta=2;
        this.mHero.getRigidBody().setMass(0);
        this.time1=this.time.getMilliseconds();
        this.time2=this.time1;   
    }
    
    
    if(this.isdead)
    {
        this.mHero.setMode(10);
        this.mHero.getRigidBody().setMass(0);
        this.mPlayagain.setVisibility(1);
        
        if(gEngine.Input.isKeyClicked(gEngine.Input.keys.S)){
            gEngine.GameLoop.stop();
            this.mHero.sta=2;   
        }
        
    }
    
};

