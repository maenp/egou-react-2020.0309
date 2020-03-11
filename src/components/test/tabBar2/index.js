import React, {Component} from 'react';
import {TabBar_UL} from './styled'
import TabBarHoc from '@hoc/test/TabBarHoc'

class TabBar extends Component {
    render() {
        return (
            <TabBar_UL>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </TabBar_UL>
        );
    }
}

export default TabBar;
// export default TabBarHoc(TabBar);