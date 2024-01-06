'use client'

import Button from "./button/button";

import React, { useEffect, useRef } from 'react';

const compButtonsArray = [
    [
        { icon: 'gaz', transitionDelay: '0.2s', countBtn: 'north-button' },
        { icon: 'uiniversitu2035', transitionDelay: '0.1s', countBtn: 'north_east-button' },
        { icon: 'yand', transitionDelay: '0.3s', countBtn: 'north_west-button' },
        { icon: 'megafon', transitionDelay: '0.4s', countBtn: 'west-button' },
        { icon: 'kirov_zavod', transitionDelay: '0s', countBtn: 'east-button' }
    ],
    [
        { icon: 'megafon', transitionDelay: '0s', countBtn: 'north_west-button' },
        { icon: 'ptc', transitionDelay: '0.1s', countBtn: 'north-button' },
        { icon: 'ublox', transitionDelay: '0.2s', countBtn: 'north_east-button' },
        { icon: 'beza', transitionDelay: '0.3s', countBtn: 'east-button' }
    ],
    [
        { icon: 'kuka', transitionDelay: '0s', countBtn: 'north_west-button' },
        { icon: 'ni', transitionDelay: '0.1s', countBtn: 'north-button' },
    ],
    [
        { icon: 'coex', transitionDelay: '0s', countBtn: 'north-button' },
        { icon: 'fixar', transitionDelay: '0.1s', countBtn: 'north_east-button' },
    ],
    [
        { icon: 'gaz', transitionDelay: '0.1s', countBtn: 'west_south-button' },
        { icon: 'granit', transitionDelay: '0s', countBtn: 'west-button' },
        { icon: 'samsungIT', transitionDelay: '0.2s', countBtn: 'south-button' },
        { icon: 'cloud', transitionDelay: '0.3s', countBtn: 'south_east-button' }
    ],
    [
        { icon: 'mgbot', transitionDelay: '0s', countBtn: 'north_east-button' },
        { icon: 'spb', transitionDelay: '0.1s', countBtn: 'north-button' },
        { icon: 'volts', transitionDelay: '0.2s', countBtn: 'north_west-button' },
        { icon: 'infotecs', transitionDelay: '0.3s', countBtn: 'west-button' },
        { icon: 'nppkt', transitionDelay: '0.4s', countBtn: 'west_south-button' }
    ],
    [
        { icon: 'mars', transitionDelay: '0s', countBtn: 'north_east-button' },
        { icon: 'kirov_zavod', transitionDelay: '0.1s', countBtn: 'east-button' },
        { icon: 'yand', transitionDelay: '0.2s', countBtn: 'south_east-button' }
    ],
    [
        { icon: 'spbficran', transitionDelay: '0s', countBtn: 'west-button' },
    ],
    [
        { icon: 'gaz', transitionDelay: '0.1s', countBtn: 'east-button' },
        { icon: 'uiniversitu2035', transitionDelay: '0s', countBtn: 'south_east-button' },
        { icon: 'yand', transitionDelay: '0.2s', countBtn: 'north_east-button' },
        { icon: 'megafon', transitionDelay: '0.4s', countBtn: 'north_west-button' },
        { icon: 'kirov_zavod', transitionDelay: '0.3s', countBtn: 'north-button' }
    ],
    [
        { icon: 'silmash', transitionDelay: '0s', countBtn: 'north-button' },
    ],
    [
        { icon: 'gaz', transitionDelay: '0.3s', countBtn: 'south-button' },
        { icon: 'uiniversitu2035', transitionDelay: '0.4s', countBtn: 'south_east-button' },
        { icon: 'yand', transitionDelay: '0s', countBtn: 'north_west-button' },
        { icon: 'megafon', transitionDelay: '0.1s', countBtn: 'west-button' },
        { icon: 'kirov_zavod', transitionDelay: '0.2s', countBtn: 'west_south-button' }
    ],
];

const Star = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
            <g filter="url(#filter0_f_154_37863)">
            <path d="M13.5 1L14.8258 12.1742L26 13.5L14.8258 14.8258L13.5 26L12.1742 14.8258L1 13.5L12.1742 12.1742L13.5 1Z" fill="white"/>
            </g>
            <defs>
            <filter id="filter0_f_154_37863" x="0" y="0" width="27" height="27" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_154_37863"/>
            </filter>
            </defs>
        </svg>
    );
};

const Glare = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
            <circle cx="13.5" cy="13.5" r="6.5" fill="white" fill-opacity="0.7"/>
            <g filter="url(#filter0_f_283_21)">
            <circle cx="13.5" cy="13.5" r="6.5" fill="white" fill-opacity="0.7"/>
            </g>
            <defs>
            <filter id="filter0_f_283_21" x="0" y="0" width="27" height="27" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="3.5" result="effect1_foregroundBlur_283_21"/>
            </filter>
            </defs>
        </svg>
    )
}

const SpaceShip = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
            <path d="M27.7316 0.428471C25.1486 1.2738 22.4718 2.87054 20.4054 4.86647C19.3722 5.85269 19.2313 6.67454 20.0767 7.05024C20.6637 7.33202 20.6872 7.30854 22.4013 5.75876C23.6458 4.65513 24.5381 3.99765 25.7122 3.38714C27.0506 2.68269 26.6749 2.47136 29.8684 5.7118L32.1696 8.03646L31.7939 8.76439C30.9721 10.3611 29.0935 12.404 21.2742 20.1764C16.8127 24.6379 13.1027 28.3244 13.0322 28.3714C12.8913 28.5123 11.5294 27.1739 11.5294 26.8921C11.5294 26.7512 11.8581 26.3285 12.2338 25.9763C12.633 25.6006 12.9383 25.1544 12.9383 24.9901C12.9383 24.5439 12.2808 23.9334 11.8112 23.9334C11.5998 23.9334 10.5197 24.8492 9.39259 25.9528C7.7254 27.5965 7.32622 27.9018 7.11488 27.62C6.88007 27.3617 7.0914 27.033 8.24199 25.9059C9.01688 25.1544 10.3318 23.863 11.1302 23.0646C11.9521 22.2427 12.727 21.5853 12.8678 21.5853C13.267 21.5853 13.4079 22.2427 13.0322 22.3836C12.8444 22.4541 12.7035 22.8298 12.7035 23.3229C12.7035 24.0273 12.7974 24.1917 13.314 24.3091C13.7836 24.4265 14.0419 24.3091 14.6055 23.6751C16.0378 22.0549 14.9577 19.6833 12.7739 19.7068C11.8816 19.7302 11.3885 20.0355 9.43955 21.8436L7.74888 23.3933L7.06792 22.8063C6.66874 22.4541 6.36348 22.1019 6.36348 21.9845C6.36348 21.867 6.97399 21.1391 7.7254 20.3642C8.94644 19.0962 10.3788 17.6404 17.705 10.4081C19.9358 8.17735 20.2645 7.63728 19.7009 7.07372C19.2548 6.62758 18.8087 6.74498 17.9164 7.51987C17.4467 7.94254 16.5075 8.52957 15.803 8.85832C14.6994 9.35143 14.3237 9.42187 13.0792 9.28098C12.3043 9.18706 11.1067 9.04617 10.4493 8.97572C8.33592 8.76439 6.69222 9.46883 2.536 12.3805L0 14.1886L0.0704444 15.1748C0.0939259 15.7384 0.187852 16.1845 0.305259 16.1845C0.399185 16.1845 0.493111 16.3489 0.493111 16.5368C0.493111 16.7246 0.610518 16.889 0.751407 16.889C0.868814 16.889 0.939259 16.9829 0.845333 17.1003C0.774888 17.2177 0.892296 17.476 1.08015 17.6639C1.268 17.8752 1.43237 18.1335 1.43237 18.2509C1.43237 18.3683 1.6437 18.697 1.902 19.0023C2.16029 19.3076 2.37163 19.6833 2.37163 19.8476C2.37163 20.012 2.51252 20.2938 2.65341 20.4582C3.61615 21.4913 3.59266 21.7262 2.37163 22.8533C1.71415 23.4638 1.19755 24.1213 1.19755 24.3326C1.19755 24.8022 9.95614 33.5608 10.4258 33.5608C10.6136 33.5608 11.3181 33.0207 11.999 32.3867C12.8209 31.6119 13.314 31.2831 13.5018 31.424C13.6427 31.5414 14.9577 32.3398 16.4135 33.1851C19.7479 35.1341 20.4524 35.2045 21.4855 33.7252C23.9746 30.1795 25.3835 27.8783 25.7357 26.7747C26.1584 25.5067 26.1349 25.3423 25.7122 21.6322C25.4774 19.7302 26.3932 18.0865 29.4927 14.94C30.8546 13.5546 31.9583 12.3101 31.9583 12.1927C31.9583 12.0518 32.1226 11.8874 32.3105 11.817C32.4983 11.7465 32.7801 11.3239 32.9445 10.8777C33.0854 10.4316 33.2967 10.0794 33.3906 10.0794C33.4846 10.0794 33.6489 9.72713 33.7194 9.30446C33.8133 8.90528 33.9777 8.50609 34.0951 8.43565C34.4943 8.17735 34.9639 5.64136 34.9874 3.48106C35.0343 1.5321 34.9639 1.1564 34.5412 0.616323C34.0481 0.00580489 33.9777 -0.0176766 31.5356 0.00580489C29.798 0.00580489 28.6239 0.146694 27.7316 0.428471ZM33.2498 3.10536C33.2498 3.85676 33.1793 4.53773 33.0619 4.60817C32.968 4.65513 32.9445 4.91343 33.0149 5.14824C33.3202 6.11098 32.6627 5.73528 30.9016 3.97417L29.0701 2.11914L29.8684 1.88432C30.3146 1.76691 31.2538 1.67299 31.9583 1.69647L33.2498 1.74343V3.10536ZM11.1302 10.9012C11.5998 11.0891 12.4452 11.2534 12.9852 11.2534H13.995L11.1772 14.0712C9.6274 15.621 8.31244 16.889 8.24199 16.889C7.93673 16.889 4.71977 13.5076 4.79022 13.2728C4.93111 12.8032 8.14807 11.0421 9.08733 10.8777C9.58044 10.8073 10.0501 10.6899 10.097 10.6429C10.2379 10.5255 10.191 10.502 11.1302 10.9012ZM4.69629 16.4428C5.72948 17.4995 6.59829 18.4153 6.59829 18.5092C6.59829 18.744 4.97807 20.2938 4.88414 20.1529C4.76674 20.0355 3.2874 17.476 2.46555 16.0436C2.06637 15.3157 1.99592 15.0105 2.20726 14.7991C2.34815 14.6582 2.536 14.5408 2.62992 14.5408C2.70037 14.5408 3.63963 15.3862 4.69629 16.4428ZM23.9981 23.6516C24.3033 25.2014 23.9041 26.5399 22.4718 28.7236L21.4621 30.2499L20.8046 29.569C20.4289 29.1698 19.9358 28.8645 19.7244 28.8645C18.339 28.8645 18.1981 29.8038 19.3957 31.0718C20.0767 31.7997 20.1706 32.011 19.9358 32.3867C19.6775 32.8094 19.607 32.8094 18.5973 32.1989C17.9868 31.8701 17.3763 31.4475 17.2119 31.2831C17.0475 31.1187 16.7658 30.9779 16.6014 30.9779C16.437 30.9779 16.0613 30.7665 15.7561 30.5082C15.4508 30.2499 15.1221 30.0386 15.0047 30.0386C14.582 30.0386 14.8638 29.4046 15.6152 28.7001L16.3901 27.9253L16.9301 28.5123C17.5172 29.1463 18.3155 29.2637 18.7617 28.8176C19.2313 28.3479 19.0904 27.7139 18.4095 27.1034L17.752 26.5399L20.6872 23.7221C23.6224 20.9278 23.6224 20.9043 23.6693 21.6557C23.7163 22.0784 23.8572 22.9707 23.9981 23.6516ZM5.47118 24.1213C6.10518 24.7318 6.15214 24.8492 5.87037 25.2953C5.4477 25.9528 5.40074 25.9528 4.50844 25.1075C3.66311 24.2856 3.66311 24.3091 4.15622 23.8395C4.62585 23.3464 4.62585 23.3464 5.47118 24.1213ZM10.5667 29.0993C11.412 29.9212 11.4355 30.0621 10.8484 30.6021C10.4023 31.0013 10.3553 30.9779 9.67436 30.2499C9.27518 29.8507 8.94644 29.4516 8.94644 29.3811C8.94644 29.2872 9.6274 28.5123 9.79177 28.4184C9.81525 28.3949 10.144 28.7236 10.5667 29.0993Z" fill="#ECECEC"/>
            <path d="M24.6797 6.08755C24.6797 6.69806 24.7736 6.79199 25.2902 6.79199C25.6189 6.79199 26.0416 6.95636 26.2295 7.14421C26.4408 7.33206 26.793 7.49643 27.0513 7.49643C27.3331 7.49643 27.4975 7.6608 27.4975 7.94258C27.4975 8.20088 27.6618 8.5531 27.8497 8.76443C28.0375 8.95228 28.2019 9.37495 28.2019 9.70369C28.2019 10.2203 28.2958 10.3142 28.9064 10.3142C29.5873 10.3142 29.6108 10.2907 29.6108 9.11665C29.6108 6.88592 28.108 5.3831 25.8772 5.3831C24.7032 5.3831 24.6797 5.40658 24.6797 6.08755Z" fill="#ECECEC"/>
        </svg>
    )
}

const Sputnik = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
            <g clip-path="url(#clip0_283_22)">
            <path d="M1.92706 1.94235C0.72 3.15416 0 3.96203 0 4.08959C0 4.34471 8.22706 12.6467 8.47059 12.6467C8.55529 12.6467 9.02118 12.2534 9.49765 11.775L10.3659 10.9034L10.6412 11.1585L10.9059 11.4136L9.21176 13.125C8.28 14.0711 7.51765 14.9002 7.51765 14.964C7.51765 15.0278 7.65529 15.251 7.83529 15.4423C8.14235 15.8038 8.14235 15.8038 7.94118 15.9951C7.67647 16.2396 7.67647 16.2715 8.00471 16.5053C8.25882 16.6967 8.28 16.6967 8.48118 16.516C8.67176 16.3353 8.70353 16.3565 9.44471 17.0687C9.86824 17.4727 10.3129 17.9297 10.4506 18.0786L10.6835 18.3549L10.1541 18.8758L9.63529 19.386L8.64 18.3975C7.77176 17.5258 7.65529 17.377 7.76118 17.2069C7.85647 17.0475 7.84588 16.9837 7.67647 16.8561C7.56 16.7605 7.41176 16.686 7.33765 16.686C7.22118 16.686 6.67059 17.2813 6.67059 17.4195C6.67059 17.5471 9.48706 20.3002 9.62471 20.3002C9.69882 20.3002 10.08 19.992 10.4718 19.6093C10.8635 19.2266 11.2447 18.9183 11.3082 18.9183C11.3718 18.9183 11.5094 19.0353 11.5941 19.1734C11.9435 19.7049 12.0282 19.6518 13.8388 17.8341L15.5541 16.112L15.8294 16.3671L16.1047 16.6223L15.2471 17.4833C14.7706 17.9616 14.4 18.4294 14.4 18.5463C14.4 18.8227 22.6376 26.9971 22.9235 26.9971C23.2094 26.9971 27 23.1916 27 22.9046C27 22.6494 18.7729 14.3475 18.5294 14.3475C18.4447 14.3475 17.9788 14.7408 17.5024 15.2191L16.6341 16.0908L16.3588 15.8357L16.0835 15.5805L17.28 14.3794L18.4659 13.1782L18.7941 13.4971C19.26 13.9542 19.5035 13.9116 19.7788 13.3376C19.9059 13.0719 20.0118 12.8061 20.0118 12.7423C20.0118 12.6892 20.1071 12.4341 20.2235 12.2002C20.34 11.9557 20.4353 11.6581 20.4353 11.5412C20.4353 11.403 20.0224 10.914 19.3765 10.2549L18.3176 9.18132L18.8471 8.66046C19.3871 8.12896 19.5247 7.72502 19.2071 7.60809C19.0376 7.54431 18.6353 7.70376 18.6353 7.84195C18.6353 7.88447 18.4341 8.07581 18.2012 8.27778L17.7776 8.62857L16.6871 7.55494L15.5965 6.48132L14.9188 6.73644C13.6059 7.22542 13.2353 7.42739 13.2353 7.67187C13.2353 7.79943 13.3624 8.04392 13.5212 8.20337L13.8071 8.51164L12.6212 9.70219L11.4353 10.8927L11.1706 10.6164L10.8953 10.3506L11.7529 9.52148C12.2612 9.02187 12.6 8.60731 12.6 8.46912C12.6 8.18211 4.37294 0.00770033 4.07647 -0.00292959C3.93882 -0.00292959 3.17647 0.688015 1.92706 1.94235ZM4.41529 1.15573L4.73294 1.464L3.11294 3.09038L1.49294 4.71676L1.16471 4.40849L0.836471 4.10022L2.45647 2.47384C3.34588 1.58093 4.07647 0.847464 4.08706 0.847464C4.09765 0.847464 4.24588 0.985653 4.41529 1.15573ZM5.73882 2.45258C5.89765 2.61203 5.79176 2.73959 4.27765 4.25967L2.64706 5.89668L2.32941 5.56715L2.01176 5.24825L3.62118 3.64313C5.32588 1.93172 5.25176 1.97424 5.73882 2.45258ZM5.45294 5.41833L3.82235 7.05534L3.49412 6.74707L3.16588 6.4388L4.77529 4.82305L6.38471 3.20731L6.74471 3.48368L7.09412 3.77069L5.45294 5.41833ZM6.60706 6.58762L4.97647 8.23526L4.63765 7.88447L4.28824 7.53368L5.90824 5.9392L7.51765 4.33408L7.87765 4.64235L8.23765 4.93998L6.60706 6.58762ZM9.09529 5.8329L9.40235 6.13053L7.76118 7.75691L6.12 9.38329L5.81294 9.07502L5.50588 8.75613L7.11529 7.14038C8.00471 6.25809 8.74588 5.52463 8.75647 5.52463C8.76706 5.52463 8.92588 5.66282 9.09529 5.8329ZM10.2494 6.98093L10.5988 7.27857L8.94706 8.9262L7.30588 10.5738L6.96706 10.2231L6.61765 9.8829L8.20588 8.28841C9.07412 7.40613 9.81529 6.69392 9.84706 6.69392C9.87882 6.69392 10.0588 6.82148 10.2494 6.98093ZM17.5447 9.47896L19.6729 11.6156L19.5035 11.9983C19.1224 12.8486 19.3235 12.9656 16.6341 10.2656L14.1671 7.7888L14.7388 7.5762C15.0459 7.44865 15.3212 7.35298 15.3529 7.34235C15.3847 7.34235 16.3694 8.29904 17.5447 9.47896ZM10.1118 10.0955L8.47059 11.7431L8.13176 11.3923L7.78235 11.0522L9.40235 9.42581L11.0329 7.79943L11.3929 8.12896L11.7529 8.44786L10.1118 10.0955ZM16.1682 10.8608C17.8624 12.551 17.9788 12.6998 17.8306 12.8699C17.6718 13.04 17.5341 12.9337 15.8294 11.2435C14.2624 9.70219 14.0082 9.39392 14.0929 9.22384C14.1459 9.11754 14.2306 9.0325 14.2729 9.0325C14.3153 9.0325 15.1624 9.85101 16.1682 10.8608ZM15.3318 11.7219L17.1529 13.5608L15.0776 15.6124L13.0024 17.6746L11.16 15.825L9.31765 13.9754L11.3506 11.9345C12.4729 10.8077 13.4153 9.89353 13.4471 9.89353C13.4788 9.8829 14.3259 10.712 15.3318 11.7219ZM10.6518 16.3778C12.4729 18.2061 12.4729 18.2061 12.2718 18.4294L12.0706 18.642L10.2176 16.7923C8.48118 15.049 8.38588 14.9321 8.54471 14.7514C8.64 14.6451 8.74588 14.5601 8.77765 14.5601C8.80941 14.5601 9.65647 15.3786 10.6518 16.3778ZM18.9 15.6231L19.2071 15.9526L17.5765 17.5896L15.9353 19.2266L15.5859 18.8864L15.2471 18.5569L16.8565 16.9305C17.7459 16.0376 18.4976 15.3042 18.54 15.3042C18.5718 15.3042 18.7306 15.453 18.9 15.6231ZM20.0647 16.7923L20.3718 17.1219L18.7412 18.7589L17.1106 20.4065L16.7612 20.0664L16.4118 19.7262L18.0212 18.0998C18.9106 17.2069 19.6624 16.4734 19.7047 16.4734C19.7365 16.4734 19.8953 16.6223 20.0647 16.7923ZM21.2082 17.9404L21.4941 18.238L19.8953 19.8325C19.0271 20.7042 18.2859 21.4376 18.2541 21.4589C18.2329 21.4908 18.0635 21.3738 17.8941 21.2038L17.5765 20.8955L19.1859 19.2797C20.0753 18.3868 20.8376 17.6534 20.8694 17.6534C20.9012 17.6427 21.0494 17.7809 21.2082 17.9404ZM22.3941 19.1309L22.7012 19.4605L21.2294 20.9486C20.4141 21.7671 19.6624 22.4794 19.5459 22.5431C19.3976 22.6388 19.2918 22.5963 19.0482 22.3624L18.7306 22.0648L20.3506 20.4384C21.24 19.5455 21.9918 18.812 22.0341 18.812C22.0659 18.812 22.2247 18.9608 22.3941 19.1309ZM23.5376 20.279L23.8235 20.5766L22.1824 22.2136L20.5518 23.8506L20.2235 23.5423L19.8953 23.2341L21.5153 21.6077C22.4047 20.7148 23.1565 19.9813 23.1988 19.9813C23.2306 19.9813 23.3788 20.1195 23.5376 20.279ZM24.7235 21.4695C24.8929 21.6396 24.9988 21.799 24.9776 21.8097C24.9459 21.8309 24.2047 22.5538 23.3153 23.436L21.7165 25.0199L21.3882 24.7116L21.06 24.3927L22.68 22.777C23.5694 21.8841 24.3318 21.1506 24.3635 21.1506C24.3953 21.1506 24.5541 21.2888 24.7235 21.4695ZM25.8671 22.6175L26.1635 22.9258L24.5647 24.5097C23.6859 25.3813 22.9447 26.1148 22.9129 26.136C22.8918 26.1679 22.7224 26.051 22.5529 25.8809L22.2247 25.5727L23.8447 23.9463C24.7341 23.0534 25.4859 22.3199 25.5282 22.3199C25.56 22.3199 25.7082 22.4581 25.8671 22.6175Z" fill="#ECECEC"/>
            <path d="M11.9428 12.4341C11.2545 13.1251 10.6934 13.7841 10.6934 13.8904C10.6934 14.1243 12.9063 16.3672 13.1287 16.3672C13.3722 16.3672 15.8816 13.7947 15.8816 13.5503C15.8816 13.2207 13.7639 11.1585 13.4357 11.1585C13.2557 11.1692 12.8322 11.5199 11.9428 12.4341ZM14.2722 12.7849L15.0345 13.5503L14.0816 14.507L13.1287 15.4636L12.3345 14.6664L11.5404 13.8692L12.4616 12.9444C12.9698 12.4235 13.4145 12.0089 13.4463 12.0089C13.4781 12.0089 13.8487 12.3597 14.2722 12.7849Z" fill="#ECECEC"/>
            </g>
            <defs>
            <clipPath id="clip0_283_22">
            <rect width="27" height="27" fill="white" transform="translate(0 -0.00292969)"/>
            </clipPath>
            </defs>
        </svg>
    )
}

const Planet = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <g clip-path="url(#clip0_277_14)">
            <path d="M33.3607 0.467731C31.9194 0.951602 30.2676 1.69354 29.717 2.09676C29.2635 2.41934 29.1826 3.46773 29.5712 3.88709C29.9761 4.3387 30.883 4.27418 31.9194 3.7258C33.1502 3.08063 35.3364 2.41934 36.2757 2.41934C36.9073 2.41934 37.1178 2.48386 37.3121 2.77418C37.6846 3.29031 37.636 4.32257 37.1664 5.75805C36.7777 6.93547 35.547 9.66128 35.3202 9.8387C35.2716 9.88709 35.1259 10.129 34.9963 10.4032L34.7858 10.8871L34.5105 10.4839C33.9923 9.69354 32.0814 7.61289 31.0611 6.75805C29.2635 5.20967 27.1421 4.08063 24.5348 3.30644C23.3202 2.93547 22.6887 2.85483 20.6482 2.79031C17.3769 2.67741 15.4012 3.06451 12.6967 4.35483C10.6239 5.3387 9.58744 6.06451 7.83845 7.80644C5.37691 10.2419 4.11375 12.4355 3.22307 15.7742C2.76962 17.4355 2.72104 17.9193 2.70485 19.9193C2.68865 21.8871 2.75343 22.4032 3.14209 23.9516C3.67651 26 4.45383 27.8387 5.47408 29.4355C6.28379 30.6935 9.10161 33.5806 10.1704 34.2581L10.883 34.6935L10.1704 35.1452C8.09756 36.4516 5.134 37.5806 3.78987 37.5806C3.09351 37.5806 2.88298 37.5161 2.68865 37.2258C2.12185 36.4193 2.59149 34.2258 3.87084 31.6613C4.24331 30.9355 4.53481 30.2097 4.53481 30.0484C4.53481 29.2419 3.54695 28.6935 2.70485 29.0161C2.20282 29.2097 1.29594 30.9677 0.486224 33.3387C0.0165881 34.6935 -0.0319949 34.9839 0.0327824 36.4032C0.0813654 37.8548 0.113754 38.0323 0.551001 38.5968C0.81011 38.9355 1.32833 39.3871 1.7008 39.5968C2.70485 40.1935 4.68056 40.1613 6.60768 39.5323C8.76153 38.8226 11.8546 37.1935 14.1866 35.5484C14.5591 35.2903 15.2069 34.8387 15.6441 34.5323C20.8263 30.9032 28.1947 23.8064 32.47 18.3064C33.0854 17.5 33.717 16.7258 33.8627 16.5645C34.219 16.1774 36.4862 12.8064 37.1664 11.6452C38.138 9.99999 39.0125 8.14515 39.5146 6.64515C40.1785 4.62902 40.2109 2.70967 39.5793 1.66128C39.3364 1.24192 38.8506 0.741924 38.4133 0.467731C37.7332 0.0322468 37.555 -1.13049e-05 36.2109 -1.13049e-05C35.0287 0.0161177 34.4619 0.0967629 33.3607 0.467731ZM23.2069 5.51612L24.0004 5.7258L23.2069 6.29031C21.4579 7.54838 17.1178 11.3548 14.5915 13.871C11.4336 17 9.94371 18.629 8.03278 21.0484C7.25545 22.0161 6.41335 23.0645 6.15424 23.3548L5.7008 23.9032L5.49027 23.0322C5.15019 21.7258 5.19877 18.1129 5.57124 16.6129C6.21902 14 7.75748 11.2581 9.55505 9.49999C11.7737 7.30644 13.9599 6.17741 17.4093 5.38709C18.5915 5.11289 22.0571 5.19354 23.2069 5.51612ZM28.2109 7.69354C30.3162 9.16128 31.4336 10.3387 32.6806 12.3871L33.1988 13.2258L32.0004 14.8871C28.1138 20.2258 21.0854 27.3387 15.466 31.5806C15.1907 31.7742 14.6401 32.1935 14.219 32.5161C13.2959 33.2097 13.1016 33.1935 11.6441 32.2258C10.2028 31.2742 8.47003 29.5 7.56315 28.0323L6.78582 26.7903L7.93562 25.1935C8.56719 24.3064 10.0247 22.5 11.1745 21.1774C15.7413 15.871 19.887 11.9677 25.7818 7.4516C26.6239 6.80644 27.0125 6.8387 28.2109 7.69354Z" fill="#ECECEC"/>
            <path d="M35.2078 16.9839L34.7705 17.371L34.7543 19.7743C34.7381 21.6936 34.6572 22.4678 34.3657 23.613C33.4588 27.1291 31.1754 30.371 28.2604 32.2743C26.6572 33.3388 25.896 33.6936 24.0499 34.242C22.56 34.6936 22.2199 34.742 19.807 34.7581C17.5074 34.7743 17.1349 34.8227 16.8434 35.0807C16.3738 35.5001 16.4224 36.3065 16.9406 36.7904C17.3454 37.1614 17.4102 37.1775 20.1309 37.1775C22.7219 37.1775 23.0296 37.1452 24.4547 36.7259C27.7098 35.7581 29.8475 34.4839 32.1794 32.1614C33.5883 30.7581 35.2564 28.5807 35.3859 28.0001C35.4021 27.9033 35.645 27.3549 35.9203 26.7743C36.2118 26.1936 36.4386 25.613 36.4386 25.4839C36.4386 25.3549 36.5843 24.7904 36.7462 24.2581C37.1835 22.8872 37.4264 20.4839 37.2968 18.8549C37.1997 17.6614 37.1349 17.4517 36.7462 17.0646C36.1956 16.5162 35.7908 16.5001 35.2078 16.9839Z" fill="#ECECEC"/>
            </g>
            <defs>
            <clipPath id="clip0_277_14">
            <rect width="40" height="40" fill="white"/>
            </clipPath>
            </defs>
        </svg>
    )
}

const StarSpace = () => {
    const numberOfStars = 14;
    const numberOfShips = 3;
    

    const stars = Array.from({ length: numberOfStars }).map((_, index) => (
        <div key={index} className="absolute" style={{ top: Math.random() * 1580, left: typeof window !== 'undefined' ? Math.random() * window.innerWidth - 50 : 0 }}>
            <Star />
        </div>
    ));

    const glares = Array.from({ length: numberOfStars }).map((_, index) => (
        <div key={index} className="absolute" style={{ top: Math.random() * 1580, left: typeof window !== 'undefined' ? Math.random() * window.innerWidth - 50 : 0 }}><Glare /></div>
    ));

    const ships = Array.from({ length: numberOfShips }).map((_, index) => (
        <div key={index} className="absolute" style={{ top: Math.random() * 1580, left: typeof window !== 'undefined' ? Math.random() * window.innerWidth - 50 : 0 }}><SpaceShip /></div>
    ));

    const sputnik = Array.from({ length: 2 }).map((_, index) => (
        <div key={index} className="absolute" style={{ top: Math.random() * 1580, left: typeof window !== 'undefined' ? Math.random() * window.innerWidth - 50 : 0 }}><Sputnik /></div>
    ));

    const planet = Array.from({ length: 2 }).map((_, index) => (
        <div key={index} className="absolute" style={{top:Math.random() * 1580, left: Math.random() * window.innerWidth-50 }}><Planet /></div>
    ));



    return (
        <div className="absolute pt-60 w-full h-full z-0">
            {stars}
            {glares}
            {ships}
            {planet}
            {sputnik}
        </div>
    );
};

interface LineProps {
    startId: string;
    endId: string;
}

const Line: React.FC<LineProps> = ({ startId, endId }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
    useEffect(() => {
      if (!canvasRef.current) return;
  
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
  
      if (!ctx) return;
  
      const startElement = document.getElementById(startId);
      const endElement = document.getElementById(endId);
  
      if (!startElement || !endElement) return;
  
      const startRect = startElement.getBoundingClientRect();
      const endRect = endElement.getBoundingClientRect();

      console.log(startRect)
  
      const startX = startRect.left + startRect.width / 2 + window.scrollX;
      const startY = startRect.top + startRect.height / 2 + window.scrollY;
      const endX = endRect.left + endRect.width / 2 + window.scrollX;
      const endY = endRect.top + endRect.height / 2 + window.scrollY;
  
      canvas.width = document.body.scrollWidth;
      canvas.height = document.body.scrollHeight;
  
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);

      ctx.strokeStyle = 'white';
      ctx.stroke();
    }, [startId, endId]);
  
    return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }} />;
  };




export default function ButtonsSpace() {
    const elements = ["1", "2", "2", "3", "3", "4", "4", "5", "5", "6", "6", "7", "7", "8", "8", "9", "9", "10", "10", "11"];

    const renderLines = () => {
        const lines = [];
        for (let i = 0; i < elements.length - 1; i++) {
        lines.push(<Line key={`line-${i}`} startId={elements[i]} endId={elements[i + 1]} />);
        }
        return lines;
    };
    return (
        <div className="flex flex-col pt-20 ">
            
        <div className="flex pl-20 sm: pl-28">
            <Button elem="1"companyButtons={compButtonsArray[0]} title="Лаборатория технологического предпринимательства"/>
        </div>
        <div className="flex pr-20 flex-row-reverse relative sm:pr-28">
            <Button  elem="2" companyButtons={compButtonsArray[1]} title="Лаборатория интернета вещей"/>
        </div>
        <div className="flex pl-96 sm:pl-28">
            <Button elem="3" companyButtons={compButtonsArray[2]} title="Лаборатория робототехники"/>
        </div>
        <div className="flex pr-36 pt-16  flex-row-reverse relative">
            <Button elem="4" companyButtons={compButtonsArray[3]} title="Лаборатория беспилотных авиационных систем"/>
        </div>
        <div className="flex pl-36 sm:pt-10">
            <Button elem="5" companyButtons={compButtonsArray[4]} title="Лаборатория искусственного интеллекта"/>
        </div>
        <div className="flex pr-60  flex-row-reverse relative sm:pt-10">
            <Button elem="6" companyButtons={compButtonsArray[5]} title="Лаборатория кибербезопасности ГУАП-Infowatch"/>
        </div>
        <div className="flex pr-20 pt-20 flex-row-reverse relative sm: pr-28">
            <Button elem="7" companyButtons={compButtonsArray[6]} title="Лаборатория электроэнергетики"/>
        </div>
        <div className="flex pl-20">
            <Button elem="8" companyButtons={compButtonsArray[7]} title="Отдел Инженерный гараж"/>
        </div>
        <div className="flex pr-96 flex-row-reverse relative sm:pr-28">
            <Button elem="9" companyButtons={compButtonsArray[8]} title="Лаборатория автоматизации технологических процессов"/>
        </div>
        <div className="flex flex-row-reverse relative sm:pr-36 pt-16">
            <Button elem="10" companyButtons={compButtonsArray[9]} title="Студенческое конструкторское бюро 'Силовые машины ГУАП'"/>
        </div>
        <div className="flex pr-20 pb-10 justify-center relative sm:pt-16">
            <Button elem="11" companyButtons={compButtonsArray[10]} title="Лаборатория технологического предпринимательства"/>
        </div>
        <StarSpace />
        {renderLines()}
        </div>
    );
}
