import React from 'react';
import classnames from 'classnames';
import { CoverProps, CoverWithTransitionWrap } from './PropsType';
import prefix from '../_util/prefix';

import TransitionWrap from '../TransitionWrap';
import { transitionFade } from '../_util/variable';

const prefixCls = `${prefix}-Cover`;

const Cover: ((props: CoverProps) => JSX.Element) & {
    Transition: (props: CoverWithTransitionWrap) => JSX.Element;
} = props => {
    const { transparent = false, className, children, ...restProps } = props;
    const cls = classnames(prefixCls, className, { [`${prefixCls}-transparent`]: transparent });
    return (
        <div {...restProps} className={cls}>
            {children}
        </div>
    );
};

const Transition = (props: CoverWithTransitionWrap) => {
    const {
        transparent = false,
        className,
        children,
        visible,
        keepOnExit,
        time,
        onExitDone,
        transitionClassName = transitionFade,
        ...restProps
    } = props;
    const cls = classnames(prefixCls, className, { [`${prefixCls}-transparent`]: transparent });
    return (
        <TransitionWrap
            visible={visible}
            keepOnExit={keepOnExit}
            time={time}
            onExitDone={onExitDone}
            transitionClassName={transitionClassName}
        >
            <div {...restProps} className={cls}>
                {children}
            </div>
        </TransitionWrap>
    );
};

Cover.Transition = Transition;
export default Cover;
