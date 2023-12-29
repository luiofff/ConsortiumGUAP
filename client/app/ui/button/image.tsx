
import React from "react";

interface CompanyLogoProps {
  company: string;
}

interface SvgArray {
  [key: string]: string;
}

const svgArray: SvgArray = {
  gaz: `<svg xmlns="http://www.w3.org/2000/svg" width="38" height="40" viewBox="0 0 38 40" fill="none">
  <path d="M20.8129 0.273677C20.1139 1.39207 19.5547 2.64444 19.2635 3.72789C18.9314 4.95113 18.8441 5.63265 18.8499 7.04812C18.8499 8.03836 18.8732 8.49271 18.9489 8.91211C19.2693 10.6771 19.8634 12.2498 20.7139 13.5896C20.8711 13.8342 21.0226 14.0323 21.0459 14.0381C21.1216 14.0381 21.6633 13.1585 21.9837 12.4945C23.073 10.2693 23.4866 7.84614 23.1778 5.53363C22.9973 4.18806 22.7177 3.13956 22.2517 2.09689C21.9313 1.38042 21.1449 -9.64478e-05 21.0517 -9.64478e-05C21.0168 -9.64478e-05 20.9061 0.122228 20.8129 0.273677ZM21.3896 1.87554C22.0303 3.17451 22.4089 4.43853 22.572 5.80158C22.6594 6.56465 22.6769 7.84614 22.607 8.47524L22.5662 8.82474L22.5254 8.32961C22.4031 6.99569 22.1119 5.74915 21.6342 4.52008C21.407 3.93758 21.0925 3.32014 21.0284 3.32014C20.9469 3.32014 20.4401 4.49678 20.178 5.28898C19.8401 6.32 19.6421 7.31607 19.5896 8.28301C19.5489 9.05191 19.5489 9.05191 19.4964 8.67911C19.4673 8.46941 19.444 7.82867 19.4382 7.25199C19.4324 5.7142 19.6712 4.41523 20.2362 2.94734C20.5216 2.21922 20.976 1.22315 21.0342 1.22315C21.0517 1.22315 21.2148 1.52022 21.3896 1.87554ZM21.2614 9.05773C21.4536 9.60528 21.6109 10.4849 21.6109 11.0149C21.6109 11.51 21.442 12.3838 21.2498 12.8847C21.1566 13.1352 21.0634 13.3391 21.0517 13.3391C20.9818 13.3391 20.743 12.6867 20.6207 12.1741C20.4343 11.3994 20.4284 10.415 20.609 9.72761C20.7372 9.23831 21.0226 8.48106 21.0634 8.52184C21.075 8.53349 21.1682 8.77231 21.2614 9.05773Z" fill="#156BC1"/>
  <path d="M17.475 6.81492C16.8983 6.86152 16.077 7.05957 15.4479 7.30422C13.013 8.26534 11.2073 10.4322 10.6889 13.0302C10.6132 13.4146 10.5957 13.7466 10.619 14.6612C10.6365 15.6747 10.6598 15.8844 10.7937 16.3679C11.5685 19.2046 13.6771 21.2783 16.508 21.9715C16.974 22.088 17.1896 22.1055 18.2613 22.1055C19.3331 22.1055 19.5487 22.088 20.0147 21.9715C21.2962 21.6569 22.3854 21.0919 23.4339 20.1891L23.8824 19.7988V17.1251V14.4456H21.0573H18.2322V15.6689C18.2322 16.3387 18.2497 16.8921 18.2672 16.8921C18.2846 16.8921 18.3837 16.828 18.4769 16.7465C18.9254 16.3679 19.5661 16.2048 20.1719 16.3096C21.8204 16.6067 22.4612 18.5872 21.3078 19.8396C20.8302 20.358 19.9972 20.824 19.2341 21.0045C18.6633 21.1385 17.4633 21.0919 16.9507 20.9113C15.611 20.4454 14.6557 19.4842 14.2072 18.1445C14.0848 17.7833 14.0674 17.6319 14.0732 16.8339C14.0732 15.9718 14.0848 15.9077 14.2538 15.4534C14.5683 14.6262 15.1566 13.8515 15.8207 13.3913C16.4498 12.9603 17.376 12.6457 18.0167 12.6399H18.2905V9.69828V6.75667L18.1623 6.76249C18.0866 6.76832 17.7779 6.79162 17.475 6.81492Z" fill="#156BC1"/>
  <path d="M0.0585938 27.8433V32.5615H0.990589H1.92258V28.4549V24.3483H2.73808H3.55358V23.7367V23.1251H1.80609H0.0585938V27.8433Z" fill="#156BC1"/>
  <path d="M4.48473 23.1367C4.48473 23.1484 4.27503 25.2395 4.01873 27.785C3.76243 30.3306 3.55273 32.445 3.55273 32.4858C3.55273 32.544 3.75078 32.5615 4.44978 32.5615H5.35265L5.38178 32.2528C5.4109 31.979 5.53322 30.2548 5.53322 30.115C5.53322 30.0801 5.70797 30.0568 5.92932 30.0568H6.33125L6.39532 31.0878C6.4361 31.6587 6.46522 32.2237 6.46522 32.3402V32.5615H7.40304H8.33504L8.30009 32.311C8.25349 31.9383 7.39722 23.3755 7.39722 23.2416C7.39722 23.1309 7.35644 23.1251 5.94097 23.1251C5.14295 23.1251 4.48473 23.1309 4.48473 23.1367ZM6.09242 26.4278C6.16815 27.5404 6.23222 28.5772 6.23222 28.7287V29.0083H5.90602H5.57982L5.60895 28.7578C5.63225 28.6238 5.70215 27.5753 5.77787 26.4337C5.84777 25.292 5.91767 24.3658 5.92932 24.3774C5.94097 24.3891 6.0167 25.3094 6.09242 26.4278Z" fill="#156BC1"/>
  <path d="M10.0311 23.1837C9.6292 23.2711 9.40203 23.4459 9.22145 23.8128C9.06418 24.1332 9.05835 24.1856 9.03505 25.1759L9.01758 26.2127H9.9554H10.8874L10.9049 25.3623C10.9223 24.5584 10.9282 24.506 11.0505 24.4245C11.1612 24.3487 11.1903 24.3546 11.301 24.4652C11.4175 24.5817 11.4233 24.6283 11.4058 25.7526C11.3825 27.1971 11.4175 27.1447 10.5379 27.1447H9.96122V27.6981V28.2515H10.4272C10.9806 28.2515 11.2777 28.3563 11.3592 28.5718C11.4349 28.7757 11.4349 31.0242 11.3592 31.1698C11.2777 31.3154 11.033 31.3154 10.9515 31.1698C10.9165 31.1057 10.8932 30.663 10.8932 30.1504V29.2417H9.96122H9.02923V30.2436C9.02923 31.3678 9.10495 31.8047 9.33795 32.1134C9.61755 32.4862 9.79812 32.5328 11.0214 32.5503C12.2563 32.5736 12.6174 32.5095 12.8854 32.2299C13.2174 31.8862 13.2465 31.7231 13.2698 30.2028C13.2873 29.2592 13.2698 28.7058 13.2232 28.4961C13.1358 28.1 12.8795 27.8321 12.4893 27.7272L12.2038 27.6515L12.431 27.6049C12.7397 27.535 12.9669 27.3544 13.1242 27.069C13.2465 26.836 13.2523 26.7603 13.2523 25.4846V24.1449L13.0776 23.7954C12.932 23.5041 12.8562 23.4226 12.6116 23.3002C12.3436 23.1663 12.2679 23.1546 11.301 23.143C10.7418 23.1371 10.1709 23.1546 10.0311 23.1837Z" fill="#156BC1"/>
  <path d="M14.3867 27.8433V32.5615H15.3187H16.2507V28.4549V24.3483H16.5128H16.775V28.4549V32.5615H17.707H18.6389V27.8433V23.1251H16.5128H14.3867V27.8433Z" fill="#156BC1"/>
  <path d="M19.7461 27.8375V32.5615H20.6781H21.6101V30.9655V29.3694L22.4139 29.3461C23.1595 29.3287 23.2353 29.317 23.4391 29.183C23.5731 29.0898 23.7129 28.9151 23.8119 28.717L23.9692 28.3967L23.9867 26.422C23.9983 25.1405 23.9808 24.3483 23.9401 24.1503C23.8527 23.7367 23.6488 23.4571 23.3168 23.294C23.0489 23.16 22.9848 23.1542 21.3946 23.1367L19.7461 23.1134V27.8375ZM21.9887 24.4939L22.1343 24.6337V26.2997C22.1343 28.187 22.111 28.3035 21.7441 28.3093H21.6101V26.3288C21.6101 24.3716 21.6101 24.3483 21.7266 24.3483C21.7965 24.3483 21.913 24.4124 21.9887 24.4939Z" fill="#156BC1"/>
  <path d="M26.2124 23.1602C25.6998 23.2593 25.3503 23.5563 25.2105 24.0107C25.1522 24.2029 25.1348 25.0766 25.1348 27.9018V31.5424L25.2862 31.8686C25.4551 32.2239 25.6532 32.3986 26.0085 32.4977C26.3056 32.5792 28.2045 32.5792 28.4958 32.5035C28.7928 32.4161 29.0608 32.1773 29.2064 31.8627C29.3229 31.6064 29.3287 31.5132 29.3462 28.0241C29.3579 25.6009 29.3404 24.3485 29.2996 24.1388C29.2122 23.7311 28.9676 23.4049 28.653 23.2709C28.4433 23.1835 28.2104 23.1602 27.3774 23.1486C26.8182 23.1428 26.2939 23.1486 26.2124 23.1602ZM27.4822 27.7794C27.4881 29.9696 27.4764 31.088 27.4356 31.1696C27.3599 31.3035 27.1852 31.3152 27.0628 31.187C26.9813 31.1055 26.9696 30.721 26.9696 27.8377C26.9696 24.6223 26.9696 24.5815 27.092 24.4592C27.1968 24.3543 27.2259 24.3485 27.3366 24.4242L27.4648 24.5058L27.4822 27.7794Z" fill="#156BC1"/>
  <path d="M30.4648 27.8433V32.5615H31.3968H32.3288L32.3405 29.6374L32.358 26.7133L32.8181 29.6374L33.2841 32.5615H34.0239C34.6821 32.5615 34.7695 32.5499 34.7928 32.4567C34.8103 32.4042 35.0141 31.1286 35.253 29.6316L35.6782 26.9055L35.6957 29.7364L35.7073 32.5615H36.6393H37.5713V27.8433V23.1251H36.383H35.1947L35.1365 23.3988C35.1015 23.5561 34.8452 24.9832 34.5656 26.5735C34.2802 28.1695 34.0297 29.4277 34.0123 29.3694C33.9948 29.317 33.7327 27.8899 33.4298 26.1948L32.888 23.1251H31.6764H30.4648V27.8433Z" fill="#156BC1"/>
  <path d="M0 36.5808V39.8428H18.8438H37.6876V36.5808V33.3188H18.8438H0V36.5808ZM2.79599 35.2993V36.0565H2.99986H3.20373V35.2993V34.542H3.69886H4.19398V36.5808V38.6195H3.69886H3.20373V37.7458V36.872H2.99986H2.80181L2.78434 37.7283L2.76686 38.5904H2.27174H1.77662L1.75914 36.5633L1.74749 34.542H2.27174H2.79599V35.2993ZM11.5334 34.9207V35.2993H11.1257H10.7179V35.707V36.1148H11.0966H11.4752V36.4934V36.872H11.0966H10.7179V37.3672V37.8623H11.1839H11.6558L11.6383 38.2234L11.6208 38.5904L10.6772 38.6079L9.7277 38.6195V36.5808V34.542H10.6306H11.5334V34.9207ZM19.2807 34.6818C19.2807 34.8042 19.3098 34.8216 19.6418 34.8566C20.0962 34.9032 20.3758 35.043 20.5156 35.2993C20.6029 35.474 20.6204 35.643 20.6204 36.5225C20.6204 37.4371 20.6088 37.5594 20.5039 37.7341C20.3408 38.0021 20.0787 38.1419 19.6476 38.1885L19.2807 38.2234V38.4215V38.6195H18.8147H18.3487V38.4215V38.2234L17.9817 38.1885C17.5506 38.1419 17.2885 38.0021 17.1254 37.7341C17.0206 37.5594 17.0089 37.4371 17.0089 36.5225C17.0089 35.643 17.0264 35.474 17.1138 35.2993C17.2536 35.043 17.5332 34.9032 17.9875 34.8566C18.3195 34.8216 18.3487 34.8042 18.3487 34.6818C18.3487 34.5479 18.3661 34.542 18.8147 34.542C19.2632 34.542 19.2807 34.5479 19.2807 34.6818ZM28.1346 34.9207V35.2993H27.8142H27.4939V36.9594V38.6254L27.0162 38.6079L26.5327 38.5904L26.5153 36.9419L26.5036 35.2993H26.1832H25.8629V34.9207V34.542H26.9987H28.1346V34.9207ZM34.4256 35.2935V36.0507L34.7634 36.0798C35.2877 36.1381 35.544 36.2371 35.6896 36.4526C35.9226 36.8021 35.9401 37.7924 35.7187 38.1768C35.5323 38.503 35.276 38.5788 34.3149 38.5846L33.4645 38.5904L33.447 36.5633L33.4353 34.542H33.9305H34.4256V35.2935Z" fill="#156BC1"/>
  <path d="M17.9982 35.7014C17.9342 35.8237 17.9167 37.146 17.9749 37.3033C17.9982 37.3615 18.0798 37.3965 18.1788 37.3965H18.3477V36.4936V35.5907H18.2021C18.1206 35.5907 18.0332 35.6373 17.9982 35.7014Z" fill="#156BC1"/>
  <path d="M19.2812 36.4936V37.3965H19.4152C19.6599 37.3965 19.689 37.2975 19.689 36.5344C19.689 35.7538 19.6424 35.5907 19.4269 35.5907H19.2812V36.4936Z" fill="#156BC1"/>
  <path d="M34.4258 37.3731V37.874L34.6122 37.8391C34.7112 37.8216 34.8044 37.7925 34.8219 37.7808C34.8743 37.7284 34.9034 37.2741 34.8685 37.0818C34.8335 36.8896 34.8102 36.8721 34.6297 36.8721H34.4258V37.3731Z" fill="#156BC1"/>
</svg>`,
  yand: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="12" viewBox="0 0 40 12" fill="none">
  <g clip-path="url(#clip0_209_38247)">
    <path d="M24.0065 2.61851C22.3921 2.89119 21.4873 4.35375 21.5741 6.55378C21.6051 7.29126 21.7259 7.8738 21.9521 8.34789C22.2434 8.96452 22.7392 9.44791 23.3341 9.702C24.4186 10.1637 26.1198 10.0676 27.1113 9.48819L27.3128 9.37045L27.3221 8.69184C27.3252 8.32001 27.319 8.00394 27.3066 7.99155C27.2911 7.97606 27.2105 8.01014 27.1268 8.06282C26.504 8.45325 25.4319 8.70424 24.7564 8.61748C23.929 8.51212 23.5262 8.12479 23.3744 7.28196C23.3527 7.15492 23.3341 7.01238 23.331 6.9628V6.87914H25.3606H27.3902V6.26251C27.3902 5.06024 27.2384 4.27938 26.8913 3.70303C26.442 2.95316 25.6457 2.56583 24.5767 2.57513C24.3938 2.57823 24.1398 2.59682 24.0065 2.61851ZM24.9919 4.0098C25.3978 4.19881 25.6209 4.66671 25.624 5.33602V5.6087H24.4744H23.3217L23.3434 5.3825C23.3868 4.94249 23.5014 4.58924 23.6873 4.33825C23.8919 4.06247 24.1614 3.93853 24.5705 3.93853C24.7843 3.93543 24.8648 3.95092 24.9919 4.0098Z" fill="#151515"/>
    <path d="M37.0835 2.61776C35.6179 2.85636 34.6821 3.94708 34.4869 5.63894C34.4373 6.04796 34.4621 6.94656 34.5334 7.34319C34.6821 8.18292 35.057 8.89561 35.5714 9.31392C36.1415 9.77562 36.8325 9.98323 37.7869 9.98633C38.5306 9.98633 39.0202 9.88717 39.4044 9.65787L39.5686 9.55872V8.85532C39.5686 8.4649 39.5593 8.14883 39.55 8.14883C39.5408 8.14883 39.4943 8.17362 39.4509 8.20771C39.296 8.31616 39.045 8.42771 38.7723 8.50828C38.4438 8.60743 37.8086 8.64462 37.5173 8.58574C36.9441 8.4649 36.5289 8.0094 36.3461 7.30291C36.2469 6.90628 36.2035 6.29585 36.25 5.84964C36.3182 5.14625 36.4762 4.71554 36.7861 4.38399C37.0897 4.05863 37.412 3.93159 37.9419 3.93159C38.4314 3.93159 39.0078 4.07102 39.3734 4.27863C39.4633 4.32821 39.5439 4.36849 39.5531 4.36849C39.5624 4.36849 39.5686 4.04004 39.5686 3.64031V2.91523L39.485 2.86875C39.3362 2.79438 39.1007 2.72312 38.794 2.66114C38.3943 2.58058 37.4585 2.55579 37.0835 2.61776Z" fill="#151515"/>
    <path d="M7.93164 6.27459V9.85352H8.78377H9.63589V8.36617V6.87882H10.7514H11.8669V8.36617V9.85352H12.719H13.5712V6.27459V2.69566H12.719H11.8669V4.10554V5.51542H10.7514H9.63589V4.10554V2.69566H8.78377H7.93164V6.27459Z" fill="#151515"/>
    <path d="M15.4914 3.3681C15.4914 5.54024 15.2838 7.2445 14.9089 8.20507L14.7973 8.49015H14.5246H14.252V9.9775V11.4648H15.0421H15.8323V10.6592V9.85355H17.7069H19.5816V10.6592V11.4648H20.3718H21.1619V9.9775V8.49015H20.7901H20.4182V5.59292V2.69569H17.9548H15.4914V3.3681ZM18.714 6.27462V8.49015H17.552C16.9137 8.49015 16.39 8.48395 16.39 8.47775C16.39 8.47156 16.4365 8.32282 16.4954 8.1462C16.7619 7.33126 16.9478 5.85631 16.9478 4.56727V4.05909H17.8309H18.714V6.27462Z" fill="#151515"/>
    <path d="M28.4766 6.27459V9.85352H29.3442H30.2118L30.218 8.14307L30.2273 6.43262L31.4358 8.13997L32.6442 9.85042L33.6327 9.85352C34.4167 9.85352 34.6119 9.84422 34.5902 9.81633C34.5716 9.79464 33.9643 8.93012 33.2361 7.89518C32.3963 6.7022 31.9192 5.99881 31.9346 5.97402C31.947 5.95233 32.48 5.21485 33.1152 4.33174C33.7504 3.45173 34.271 2.72355 34.271 2.71425C34.271 2.70495 33.8837 2.69566 33.4096 2.69566H32.5513L31.3893 4.30385L30.2273 5.90895L30.218 4.30385L30.2118 2.69566H29.3442H28.4766V6.27459Z" fill="#151515"/>
    <path d="M3.22182 0.0339258C1.56095 0.247732 0.491915 1.16803 0.262616 2.58721C0.113881 3.49821 0.296701 4.4123 0.773892 5.12499C1.00939 5.47514 1.51757 5.99261 1.94518 6.31487C2.08462 6.42332 2.19927 6.51628 2.19927 6.52558C2.19927 6.53797 2.00405 6.83234 0.535296 9.01069C0.25332 9.4259 0.0178234 9.78535 0.00852748 9.81013C-0.00386708 9.84732 0.13867 9.85352 0.925725 9.85352H1.85842L3.09787 7.99433C3.77957 6.97178 4.33733 6.12585 4.33733 6.11346C4.33733 6.09796 4.11732 5.94303 3.85084 5.76331C2.63308 4.94837 2.27053 4.58273 2.06293 3.9661C1.86151 3.35567 1.88011 2.76073 2.1218 2.27424C2.31392 1.88072 2.73223 1.57395 3.24661 1.44071C3.4976 1.37874 3.97169 1.33535 4.43958 1.33226H4.80212V5.59289V9.85352H5.66974H6.53736V4.92668V-0.000159233L4.98184 0.00293941C4.12352 0.00603805 3.33337 0.0184326 3.22182 0.0339258Z" fill="#EC4015"/>
  </g>
  <defs>
    <clipPath id="clip0_209_38247">
      <rect width="39.6626" height="11.465" fill="white"/>
    </clipPath>
  </defs>
</svg>`,
};

const CompanyLogo: React.FC<CompanyLogoProps> = ({ company }) => {
  return (
    <>
      <div style={{ width: 40, height:40, display:"grid", placeItems:"center" }} dangerouslySetInnerHTML={{ __html: svgArray[company] }} />
    </>
  );
};

export default CompanyLogo;

