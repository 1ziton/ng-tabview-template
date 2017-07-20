/**
 * Created by giscafer on 2017-05-16.
 */

/**
 * 表格字段鼠标进入表格cell事件触发回调方法
 * @param $event
 * @param layArr p-overlayPanel对象数组，浮动窗口对象，根据窗口数量传参自己定义，因为此处举例三个弹窗
 * @param fieldNames 元素值的位置要和layArr对应元素一致
 */
export function overlayPanelShow($event, layArr: any[], fieldNames: string[]): any {

    let field = $event.field;
    let index = fieldNames.indexOf(field);
    if (index !== -1) {
        layArr[index].show($event.originalEvent);
    }
}

/**
 * 鼠标从自定义悬浮框上移走触发
 * @param layArr  p-overlayPanel对象数组
 */
export function overlayPanelHide($event, layArr: any[], fieldNames: any[]) {
    let field = $event.field;
    let index = fieldNames.indexOf(field);
    let relatedTarget = $event.originalEvent.relatedTarget || {};
    if (index !== -1 && !containsOverLayer(relatedTarget.className)) {
        layArr[index].hide();
    } else if (index !== -1) {
        //离开弹窗自动隐藏
        let nativeEle = layArr[index].el.nativeElement;
        if (!nativeEle.children[0]){
            return;
        }
        nativeEle.children[0].onmouseleave = function () {
            layArr[index].hide();
        }
    }
}

/**
 * 判断类名是否存在浮动框，控制鼠标在overlay之上不隐藏弹窗
 * @param className
 * @returns {any}
 */
function containsOverLayer(className) {
    if (!className){
        return false;
    }

    return className.includes('ui-overlaypanel');
}

