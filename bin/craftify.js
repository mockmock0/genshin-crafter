function craftify(possess, target) {
  function mxm(a) {
    return Math.max(a, 0);
  }
  if (possess.length === 4 && target.length === 4) {
    return fusion(
      [
        mxm(possess[0] - target[0], 0),
        mxm(possess[1] - target[1], 0),
        mxm(possess[2] - target[2], 0),
        mxm(possess[3] - target[3], 0),
      ],
      [
        mxm(target[0] - possess[0], 0),
        mxm(target[1] - possess[1], 0),
        mxm(target[2] - possess[2], 0),
        mxm(target[3] - possess[3], 0),
      ]
    );
  } else {
    return fusion(
      [mxm(possess[0] - target[0], 0), mxm(possess[1] - target[1], 0), mxm(possess[2] - target[2], 0), 0],
      [mxm(target[0] - possess[0], 0), mxm(target[1] - possess[1], 0), mxm(target[2] - possess[2], 0), 0]
    );
  }
}
function fusion(remain1, remain2) {
  let requiredTotal = 0;
  let fR01 = [0, 0, 0, 0];
  let fT01 = [0, 0, 0, 0];
  let fC01 = [0, 0, 0];
  fT01[3] = remain2[3];
  fT01[2] = remain2[2];
  fT01[1] = remain2[1];
  fT01[0] = targetCalc(remain1[1], remain2[0], 3);
  if (remain2[0] - flr(remain1[1] / 3) >= 0) fC01[0] = flr(remain1[1] / 3);
  else fC01[0] = remain2[0];
  fR01[3] = remain1[3];
  fR01[2] = remain1[2];
  fR01[1] = remainCalc(remain1[1], remain2[0], 3);
  fR01[0] = remain1[0];
  let fR02 = [0, 0, 0, 0];
  let fT02 = [0, 0, 0, 0];
  let fC02 = [0, 0, 0];
  fT02[3] = fT01[3];
  fT02[2] = fT01[2];
  fT02[1] = targetCalc(fR01[2], fT01[1], 3);
  fT02[0] = fT01[0];
  if (fT01[1] - flr(fR01[2] / 3) >= 0) fC02[1] = flr(fR01[2] / 3);
  else fC02[1] = fT01[1];
  fR02[3] = fR01[3];
  fR02[2] = remainCalc(fR01[2], fT01[1], 3);
  fR02[1] = fR01[1];
  fR02[0] = fR01[0];
  var fC03 = [0, 0, 0];
  fT01[3] = fT02[3];
  fT01[2] = fT02[2];
  fT01[1] = fT02[1];
  fT01[0] = targetCalc(fR02[2], fT02[0], 9);
  if (fT02[0] - flr(fR02[2] / 9) >= 0) fC03[1] = flr(fR02[2] / 9) * 3;
  else fC03[1] = fT02[0] * 3;
  fC03[0] = fC03[1] / 3;
  fR01[3] = fR02[3];
  fR01[2] = remainCalc(fR02[2], fT02[0], 9);
  fR01[1] = fR02[1];
  fR01[0] = fR02[0];
  let fC04 = [0, 0, 0];
  fT02[3] = fT01[3];
  fT02[2] = targetCalc(fR01[3], fT01[2], 3);
  fT02[1] = fT01[1];
  fT02[0] = fT01[0];
  if (fT01[2] - flr(fR01[3] / 3) >= 0) fC04[2] = flr(fR01[3] / 3);
  else fC04[2] = fT01[2];
  fR02[3] = remainCalc(fR01[3], fT01[2], 3);
  fR02[2] = fR01[2];
  fR02[1] = fR01[1];
  fR02[0] = fR01[0];
  let fC05 = [0, 0, 0];
  fT01[3] = fT02[3];
  fT01[2] = fT02[2];
  fT01[1] = targetCalc(fR02[3], fT02[1], 9);
  fT01[0] = fT02[0];
  if (fT02[1] - flr(fR02[3] / 9) >= 0) fC05[2] = flr(fR02[3] / 9) * 3;
  else fC05[2] = fT02[1] * 3;
  fC05[1] = fC05[2] / 3;
  fR01[3] = remainCalc(fR02[3], fT02[1], 9);
  fR01[2] = fR02[2];
  fR01[1] = fR02[1];
  fR01[0] = fR02[0];
  let fC06 = [0, 0, 0];
  fT02[3] = fT01[3];
  fT02[2] = fT01[2];
  fT02[1] = fT01[1];
  fT02[0] = targetCalc(fR01[3], fT01[0], 27);
  if (fT01[0] - flr(fR01[3] / 27) >= 0) fC06[2] = flr(fR01[3] / 27) * 9;
  else fC06[2] = fT01[0] * 9;
  fR02[3] = remainCalc(fR01[3], fT01[0], 27);
  fR02[2] = fR01[2];
  fR02[1] = fR01[1];
  fR02[0] = fR01[0];
  fC06[1] = fC06[2] / 3;
  fC06[0] = fC06[1] / 3;
  let fC07 = [0, 0, 0];
  fT01[3] = fT02[3];
  fT01[2] = fT02[2];
  fT01[1] = fT02[1];
  if (fT02[0] == 0) fT01[0] = 0;
  else if (fR02[2] < 9 && fR02[1] < 3 && fR02[1] * 3 + fR02[2] >= 9) fT01[0] = fT02[0] - 1;
  else fT01[0] = fT02[0];
  if (fT02[0] - fT01[0] == 1) fC07[1] = 3 - fR02[1];
  else fC07[1] = 0;
  if (fT02[0] - fT01[0] == 1) fC07[0] = 1;
  else fC07[0] = 0;
  fR01[3] = fR02[3];
  if (fT02[0] - fT01[0] == 1) fR01[2] = fR02[2] - fC07[1] * 3;
  else fR01[2] = fR02[2];
  if (fT02[0] - fT01[0] == 1) fR01[1] = 0;
  else fR01[1] = fR02[1];
  fR01[0] = fR02[0];
  let fC08 = [0, 0, 0];
  fT02[3] = fT01[3];
  fT02[2] = fT01[2];
  fT02[1] = fT01[1];
  if (fT01[0] == 0) fT02[0] = 0;
  else if (fR01[3] < 27 && fR01[2] < 9 && fR01[2] * 3 + fR01[3] >= 27) fT02[0] = fT01[0] - 1;
  else fT02[0] = fT01[0];
  if (fT01[0] - fT02[0] == 1) fC08[2] = 9 - fR01[2];
  else fC08[2] = 0;
  if (fT01[0] - fT02[0] == 1) fC08[0] = 1;
  else fC08[0] = 0;
  if (fC08[0] == 1) fC08[1] = 3;
  else fC08[1] = 0;
  if (fT01[0] - fT02[0] == 1) fR02[3] = fR01[3] - fC08[2] * 3;
  else fR02[3] = fR01[3];
  if (fT01[0] - fT02[0] == 1) fR02[2] = 0;
  else fR02[2] = fR01[2];
  fR02[1] = fR01[1];
  fR02[0] = fR01[0];
  let fC09 = [0, 0, 0];
  fT01[3] = fT02[3];
  fT01[2] = fT02[2];
  fT01[1] = fT02[1];
  if (fT02[0] == 0) fT01[0] = 0;
  else if (fR02[3] < 27 && fR02[1] < 3 && fR02[1] * 9 + fR02[3] >= 27) fT01[0] = fT02[0] - 1;
  else fT01[0] = fT02[0];
  if (fT02[0] - fT01[0] == 1) fC09[0] = 1;
  else fC09[0] = 0;
  if (fT02[0] - fT01[0] == 1) fC09[1] = 3 - fR02[1];
  else fC09[1] = 0;
  if (fT02[0] - fT01[0] == 1) fR01[3] = fR02[3] - fC09[1] * 9;
  else fR01[3] = fR02[3];
  fC09[2] = (fR02[3] - fR01[3]) / 3;
  fR01[2] = fR02[2];
  if (fT02[0] - fT01[0] == 1) fR01[1] = 0;
  fR01[1] = fR02[1];
  fR01[0] = fR02[0];
  let fC10 = [0, 0, 0];
  fT02[3] = fT01[3];
  fT02[2] = fT01[2];
  if (fT01[1] == 0) fT02[1] = 0;
  else if (fR01[3] < 9 && fR01[2] < 3 && fR01[2] * 3 + fR01[3] >= 9) fT02[1] = fT01[1] - 1;
  else fT02[1] = fT01[1];
  fT02[0] = fT01[0];
  if (fT01[1] - fT02[1] == 1) fC10[2] = 3 - fR01[2];
  else fC10[2] = 0;
  if (fT01[1] == 1) fC10[1] = 1;
  else fC10[1] = 0;
  if (fT01[1] - fT02[1] == 1) fR02[3] = fR01[3] - fC10[2] * 3;
  else fR02[3] = fR01[3];
  if (fT01[1] - fT02[1] == 1) fR02[2] = 0;
  else fR02[2] = fR01[2];
  fR02[1] = fR01[1];
  fR02[0] = fR01[0];
  let fC11 = [0, 0, 0];
  fT01[3] = fT02[3];
  fT01[2] = fT02[2];
  fT01[1] = fT02[1];
  if (fT02[0] == 0) fT01[0] = 0;
  else if (fR02[3] < 27 && fR02[2] < 9 && fR02[1] < 3 && fR02[1] * 9 + fR02[1] * 3 + fR02[3] >= 27)
    fT01[0] = fT02[0] - 1;
  else fT01[0] = fT02[0];
  if (fT02[0] - fT01[0] == 1) {
    if (fR02[1] == 1) fC11[2] = 6 - fR02[2];
    else if (fR02[1] == 2) fC11[2] = 3 - fR02[2];
    else {
      console.log("fusion count error!");
    }
  } else fC11[2] = 0;
  if (fT02[0] - fT01[0] == 1) fC11[0] = 1;
  else fC11[0] = 0;
  if (fT02[0] - fT01[0] == 1) fC11[1] = 3 - fR02[1];
  else fC11[1] = 0;
  if (fT02[0] - fT01[0] == 1) fR01[3] = fR02[3] - fC11[2] * 3;
  else fR01[3] = fR02[3];
  if (fT02[0] - fT01[0] == 1) fR01[2] = 0;
  else fR01[2] = fR02[2];
  if (fT02[0] - fT01[0] == 1) fR01[1] = 0;
  else fR01[1] = fR02[1];
  fR01[0] = fR02[0];
  let temp3 = [fC01, fC02, fC03, fC04, fC05, fC06, fC07, fC08, fC09, fC10, fC11];
  let four2five = 0;
  let three2four = 0;
  let two2three = 0;
  temp3.forEach((item) => {
    four2five += item[0];
    three2four += item[1];
    two2three += item[2];
  });
  if (fT01[0] !== 0)
    requiredTotal =
      fT01[0] * 27 + fT01[1] * 9 + fT01[2] * 3 + fT01[3] - (fR01[0] * 27 + fR01[1] * 9 + fR01[2] * 3 + fR01[3]);
  else if (fT01[1] !== 0) requiredTotal = fT01[1] * 9 + fT01[2] * 3 + fT01[3] - (fR01[1] * 9 + fR01[2] * 3 + fR01[3]);
  else if (fT01[2] !== 0) requiredTotal = fT01[2] * 3 + fT01[3] - (fR01[2] * 3 + fR01[3]);
  else requiredTotal = mxm(fT01[3] - fR01[3], 0);
  return {
    required: [fT01[0], fT01[1], fT01[2], fT01[3]],
    requiredTotal: requiredTotal,
    remain: [fR01[0], fR01[1], fR01[2], fR01[3]],
    count: [four2five, three2four, two2three],
  };
}
function flr(a) {
  return Math.floor(a);
}
function remainCalc(remains, targets, intervals) {
  if (targets - flr(remains / intervals) >= 0) return remains - flr(remains / intervals) * intervals;
  else return (flr(remains / intervals) - targets) * intervals + remains - flr(remains / intervals) * intervals;
}
function targetCalc(remains, targets, intervals) {
  if (targets - flr(remains / intervals) >= 0) return targets - flr(remains / intervals);
  else return 0;
}
module.exports = craftify;
