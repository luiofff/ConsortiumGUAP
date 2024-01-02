import Button from "./button/button";

const compButtonsArray = [
    [
        { icon: 'gaz', label: 'Label 2', transitionDelay: '0.2s', countBtn: 'north-button' },
        { icon: 'uiniversitu2035', label: 'Label 2', transitionDelay: '0.1s', countBtn: 'north_east-button' },
        { icon: 'yand', label: 'Label 2', transitionDelay: '0.3s', countBtn: 'north_west-button' },
        { icon: 'megafon', label: 'Label 2', transitionDelay: '0.4s', countBtn: 'west-button' },
        { icon: 'kirov_zavod', label: 'Label 2', transitionDelay: '0s', countBtn: 'east-button' }
    ],
    [
        { icon: 'megafon', label: 'Label 2', transitionDelay: '0s', countBtn: 'north_west-button' },
        { icon: 'ptc', label: 'Label 2', transitionDelay: '0.1s', countBtn: 'north-button' },
        { icon: 'ublox', label: 'Label 2', transitionDelay: '0.2s', countBtn: 'north_east-button' },
        { icon: 'beza', label: 'Label 2', transitionDelay: '0.3s', countBtn: 'east-button' }
    ],
    [
        { icon: 'kuka', label: 'Label 2', transitionDelay: '0s', countBtn: 'north_west-button' },
        { icon: 'ni', label: 'Label 2', transitionDelay: '0.1s', countBtn: 'north-button' },
    ],
    [
        { icon: 'coex', label: 'Label 2', transitionDelay: '0s', countBtn: 'north-button' },
        { icon: 'fixar', label: 'Label 2', transitionDelay: '0.1s', countBtn: 'north_east-button' },
    ],
    [
        { icon: 'gaz', label: 'Label 2', transitionDelay: '0.2s', countBtn: 'north-button' },
        { icon: 'gaz', label: 'Label 2', transitionDelay: '0.1s', countBtn: 'north_east-button' },
        { icon: 'samsungIT', label: 'Label 2', transitionDelay: '0.3s', countBtn: 'north_west-button' },
        { icon: 'gaz', label: 'Label 2', transitionDelay: '0.4s', countBtn: 'west-button' }
    ],
];

export default function ButtonsSpace() {


  return (
    <div className="flex flex-col pr-40 pl-40 pt-20">
      <div className="flex">
        <Button companyButtons={compButtonsArray[0]} title="Лаборатория технологического предпринимательства"/>
      </div>
      <div className="flex flex-row-reverse relative">
        <Button companyButtons={compButtonsArray[1]} title="Лаборатория интернета вещей"/>
      </div>
      <div className="flex">
        <Button companyButtons={compButtonsArray[2]} title="Лаборатория робототехники"/>
      </div>
      <div className="flex flex-row-reverse relative">
        <Button companyButtons={compButtonsArray[3]} title="Лаборатория беспилотных авиационных систем"/>
      </div>
      <div className="flex">
        <Button companyButtons={compButtonsArray[4]} title="Лаборатория искусственного интеллекта"/>
      </div>
      {/* <div className="flex flex-row-reverse relative">
        <Button companyButtons={compButtonsArray[5]} title="Лаборатория кибербезопасности ГУАП-Infowatch"/>
      </div>
      <div className="flex">
        <Button companyButtons={compButtonsArray[6]} title="Лаборатория электроэнергетики"/>
      </div>
      <div className="flex flex-row-reverse relative">
        <Button companyButtons={compButtonsArray[7]} title="Отдел Инженерный гараж"/>
      </div> */}
    </div>
  );
}
