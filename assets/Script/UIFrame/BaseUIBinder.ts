import UIHelper from "./UIHelper";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BaseUIBinder extends cc.Component {

    $collector: string;


    _Nodes        : {[name: string]: cc.Node} = {};

    _Labels       : {[name: string]: cc.Label}   = {};
    _Buttons      : {[name: string]: cc.Button}   = {};
    _Sprites      : {[name: string]: cc.Sprite}   = {};
    _RichTexts    : {[name: string]: cc.RichText}   = {};
    _MotionStreaks: {[name: string]: cc.MotionStreak}   = {};
    _Graphicss    : {[name: string]: cc.Graphics}   = {};
    _EditBoxs     : {[name: string]: cc.EditBox}   = {};
    _ScrollViews  : {[name: string]: cc.ScrollView}   = {};
    _ProgressBars : {[name: string]: cc.ProgressBar}   = {};
    _Sliders      : {[name: string]: cc.Slider}   = {};

    __preInit() {
        UIHelper.getInstance().bindComponent(this);
    }


    // onLoad () {}

    start () {
        // 下一行可以直接打印出Text中的文本
        // cc.log(this._Labels.Text.string)
    }

    // update (dt) {}
}
