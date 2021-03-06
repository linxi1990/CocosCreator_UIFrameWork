import BaseUIForm from "../UIFrame/BaseUIForm";
import { UIFormShowMode, UIFormType } from "../UIFrame/config/SysDefine";
import UIManager from "../UIFrame/UIManager";
import { UIType } from "../UIFrame/FormType";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HallForm extends BaseUIForm {

    public UIType = new UIType(UIFormType.Normal, UIFormShowMode.HideOther);


    init() {
        
    }

    async load() {
        await UIManager.GetInstance().ShowUIForms("UIForm/UserInfoForm");
        await UIManager.GetInstance().ShowUIForms("UIForm/FriendRankForm");
        await UIManager.GetInstance().ShowUIForms("UIForm/MenuForm");
        await UIManager.GetInstance().ShowUIForms("UIForm/RoomForm");
    }

    start () {
        this.playRoleAnim();
    }

    playRoleAnim() {
        let role = cc.find("role", this.node)
        role.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(5, 1.1),  cc.scaleTo(5, 1))));
    }

    // update (dt) {}
}
