const baseUrl = 'http://172.26.25.215:5091/ls-bigscreen-server'
const videoSrc = require('../../../image/video.mp4');
console.log(videoSrc);
$.get(`${baseUrl}/cpu/page1/overview/companyprofile`, (data) => {
    console.table(data.data['area-info']);
    // * 上前三
    console.log(data.data['area-info']['item-1'], '占地面积');
    // $('#mu').text(data.data['area-info']['item-1'].value)
    console.log(data.data['area-info']['item-2'], '建筑面积');
    // $('#mianji').text(data.data['area-info']['item-2'].value)
    console.log(data.data['area-info']['item-3'], '预期容量');
    // $('#rongliang').text(data.data['area-info']['item-3'].value)
})
$.get(`${baseUrl}/cpu/page1/overview/getOverallSituation`, (data) => {
    console.table(data.data.year)
    console.table(data.data.fix, '系统')
    $('#mu').text(data.data.fix.up1);
    $('#mianji').text(data.data.fix.up2);
    $('#rongliang').text(data.data.fix.up3);
    $('#qiye').text(data.data.fix.up4);
    $('#renshu').text(data.data.fix.up5);


    // * 1
    $('#qiye').text(data.data.year.enterCompany)
    $('#renshu').text(data.data.year.parkInPeople)

    // * 2
    $('#zh_mujunchanzhi').text(data.data.year.outputUnitArea)
    $('#zh_mujunshuishou').text(data.data.year.taxUnitArea)

    // * 3
    $('#dt_nianpai').text(data.data.year.ce)
    $('#dt_jipai').text(data.data.year.ceUnitArea)
    $('#dt_nianjian').text(data.data.year.ceReduction)
    $('#dt_junpai').text(data.data.year.cePerCapita)

    console.log(
        // * 上后二
        data.data.year.enterCompany, '入住成员企业',
        data.data.year.parkInPeople, '园区入驻人数',

        // * 左中二
        data.data.year.outputUnitArea, '亩均产值',
        data.data.year.taxUnitArea, '亩均税收',

        // * 右上四
        data.data.year.ce, '年碳排放量',
        data.data.year.ceReduction, '年碳减排量',
        data.data.year.ceUnitArea, "单位面积碳排放量",
        data.data.year.cePerCapita, '人均碳排放量',

        // * 下右四
        data.data.year.ecUnitGdp, '单位综合能耗',
        data.data.year.energyOutputRate, '能源产出率',
        data.data.year.ecUnitArea, "单位建筑面积能耗",
        data.data.year.ecPerCapita, "人均能源消耗量",

        // * 下左五
        data.data.year.energyConservation, "年节能量",
        data.data.year.ec, "年能源消耗",
        data.data.year.generateElec, "年发电量",
        data.data.year.useElec, "年用电量",
        data.data.year.newEnergyRate, "新能源消费比重"
    );
    // * 4
    $('#dl_nianjieneng').text(data.data.year.energyConservation)
    $('#dl_nenghao').text(data.data.year.ec)
    $('#dl_nianfadian').text(data.data.year.generateElec)
    $('#dl_nianyongdian').text(data.data.year.useElec)
    $('#dl_xinnengyuan').text(data.data.year.newEnergyRate.slice(0,data.data.year.newEnergyRate.length-1))

    // *5
    $('#dl_gdp').text(data.data.year.ecUnitGdp)
    $('#dl_nengyuanchanchu').text(data.data.year.energyOutputRate)
    $('#dl_danweimianji').text(data.data.year.ecUnitArea)
    $('#dl_renjunnenghao').text(data.data.year.ecPerCapita)


    data.data.year.energyOutputRate
    data.data.year.ecUnitArea
    data.data.year.ecPerCapita
})
$.get(`${baseUrl}/cpu/page1/overview/getOverallSituationRealtime`, (data) => {
    $('#zh_zaiyuanrenshu').text(data.data.parkPeople)
    $('#zh_fangkerenshu').text(data.data.visitPeople)
    $('#zh_zaiyuancheliang').text(data.data.parkCar)
    console.log(
        // * 左上三
        data.data.parkPeople, '在园人数',
        data.data.visitPeople, '访客人数',
        data.data.parkCar, '园区车辆',
    );
    // console.table(data.data)
})
$.get(`${baseUrl}/cpu/page3/double-carbons/overview`, (data) => {
    // * 右下一
    let num = data.data['item-1'].value.slice(0, data.data['item-1'].value.length - 1);
    $('#dt_tanzhonghe').text(num)
    console.log(data.data['item-1'].value.slice(0, data.data['item-1'].value.length - 1), '碳中和率');
    console.log(data)

})
$.get(`${baseUrl}/cpu/page3/doubleCarbon/getDoubleCarbon`, (data) => {
    console.table(data.data.year);
    // * 右下四
    $('#dt_jieyuebiaomei').text(data.data.year.savingStandardCoal)
    console.log(data.data.year.savingStandardCoal, '年节约标煤')

    $('#co2').text(data.data.year.CO2EmissionReduction)
    console.log(data.data.year.CO2EmissionReduction, 'co2')

    $('#so2').text(data.data.year.SO2EmissionReduction)
    console.log(data.data.year.SO2EmissionReduction, 'so2')

    $('#no2').text(data.data.year.NO2EmissionReduction)
    console.log(data.data.year.NO2EmissionReduction, 'no2')
})
$.get(`${baseUrl}/cpu/page1/carpark/overview`, (data) => {
    // * 3维
    console.log(data.data['item-2'].value, '车位数');
    $('.chewei').text(data.data['item-2'].value)
})
$.get(`${baseUrl}/cpu/page1/overview/deviceinfo`, (data) => {
    // * 3维
    $('.chuneng').text(data.data['item-2'].value.slice(0, data.data['item-2'].value.length - 7))
    $('.guangfu').text(data.data['item-3'].value.slice(0, data.data['item-3'].value.length - 3))
    console.log(data.data['item-2'].value, '储能');
    const guanfuNum =  data.data['item-3'].value.slice(0, data.data['item-3'].value.length - 3)
    // console.log(aa);
    console.log(data.data['item-3'].value,'光伏')
    // console.log(guanfuNum, '光伏');
    // console.log(data.data['item-4'].value[0], '智慧停车');
    // $('.chewei').text(data.data['item-4'].value)[0]

})
$.get(`${baseUrl}/cpu/page1/carpark/function/district`, (data) => {
    // console.log(data.data.ground[0]['recharge-details'])
    // * 3维
    $('.c_1').text(data.data.ground[0]['recharge-details'].ac)
    console.log(data.data.ground[0]['recharge-details'].ac, '交流');

    $('.c_2').text(data.data.ground[0]['recharge-details'].dc)
    console.log(data.data.ground[0]['recharge-details'].dc, '直流');

    $('.c_3').text(data.data.ground[0]['recharge-details'].v2g)
    console.log(data.data.ground[0]['recharge-details'].v2g, 'v2g');

})
