import {createGlobalStyle} from 'styled-components';

export const GlobalStyle1 = createGlobalStyle`

@font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1543843638751'); /* IE9*/
    src: url('./iconfont.eot?t=1543843638751#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
        url('./iconfont.ttf?t=1543843638751') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
        url('./iconfont.svg?t=1543843638751#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.icon-spin:before { content: "\e851"; }

.icon-Aa:before { content: "\e636"; }

.icon-Apache:before { content: "\e61b"; }

.icon-fangdajing:before { content: "\e653"; }
`;