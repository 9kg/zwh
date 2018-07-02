export default {
  convertDataToList(dataList, keyF, valueF) {
    if (!dataList || !dataList.length) return [];
    return dataList.map(function (dataItem) {
      return {
        label: dataItem[keyF],
        value: dataItem[valueF]
      }
    })
  }
}