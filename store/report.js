let params = {
    page : 1,
    pageSize : 24
};
export const state = () => {
    return {
        dataList : [],
        headerList : [],
        total : 0,
        currentPage:1,
        params :{
            page : 1,
            pageSize : 24,
            reportCategory:''
        }
    }
}

export const mutations = {
    // 设置数据
    SET_LIST(state, obj) {
        console.log('SET_LIST', obj);
        state.dataList = obj.dataList;
        state.headerList = obj.header;
        state.total = obj.total;
    },
    SET_CURRENTPAGE(state, obj) {
        console.log('SET_CURRENTPAGE', obj);
        state.currentPage = obj.currentPage;
    },
    SET_PARAMS(state, obj){
        if(obj.reportCategory){
            if(obj.reportCategory<0){
                delete obj.reportCategory;
                params.reportCategory && delete params.reportCategory;
            }
            // debugger
            // state.currentPage = 1;
        }
        params = _.assignIn(params, obj);
        console.log('params',params);
    }
  }
export const actions = {
    // 异步设置数据
    async ASYNC_SET_LIST(obj, reportCategory) {
        /* if(reportCategory){
            if(reportCategory>0)
                params.reportCategory = reportCategory;
            else
            params.reportCategory && delete params.reportCategory;
        } */
        console.log(params);
        obj.commit('SET_LIST', await this.$axios.$post('api/report/queryReportList',{
            data : params
        }))
    }
  }
  