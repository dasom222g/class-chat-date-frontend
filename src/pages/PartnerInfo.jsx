import React, { useState } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import PrevButton from "../components/PrevButton";
import RadioGroup from "../components/RadioGroup";
import { infoBuisnessList, startupStageList } from "../data/common";
import { initialPartnerInfo } from "../data/initialState";
import Input from "../components/Input";

// 사업
const PartnerInfo = ({ handlePartnerInfo }) => {
  // logic
  const history = useNavigate();

  const [partnerInfo, setPartnerInfo] = useState(initialPartnerInfo);

  const handleClick = () => {
    history("/chat");
    handlePartnerInfo(partnerInfo);
  };

  const handleStartupStageData = (startupStage) => {
    const resultData = { ...partnerInfo, startupStage };
    setPartnerInfo(resultData);
  };

  const handleInfoContent = (label, value) => {
    const resultData = { ...partnerInfo, [label]: value };
    setPartnerInfo(resultData);
  };

  // view
  return (
    <div className="w-full h-full px-6 pt-10 break-keep overflow-auto">
      <i className="w-168 h-168 rounded-full bg-date-blue-600 fixed -z-10 -left-60 -top-104"></i>
      {/* START:뒤로가기 버튼 */}
      <PrevButton />
      {/* END:뒤로가기 버튼 */}
      <div className="h-full flex flex-col">
        {/* START:타이틀 영역 */}
        <Title mainTitle={"나의 사업을 알려주세요!"} />
        {/* END:타이틀 영역 */}
        {/* START:info 영역 */}
        <form className="pt-20">
          {/* START:예창,초창 체크 */}
          <RadioGroup
            items={startupStageList}
            name="startupStage"
            defaultCheckedData={partnerInfo.startupStage}
            onChange={handleStartupStageData}
          />
          {/* END:예창,초창 체크 */}
          {/* START:input 영역 */}
          <div>
            {infoBuisnessList.map((infoContent) => (
              <Input
                key={infoContent.id}
                label={infoContent.label}
                inputType={infoContent.inputType}
                text={infoContent.text}
                placeholder={infoContent.placeholder}
                onChange={handleInfoContent}
              />
            ))}
          </div>
          {/* END:input 영역 */}
        </form>
        {/* END:info 영역 */}

        {/* START:Button 영역 */}
        <Button
          text={"Go Chat"}
          color={"bg-date-blue-700"}
          onClick={handleClick}
        />
        {/* END:Button 영역 */}
      </div>
    </div>
  );
};

export default PartnerInfo;
