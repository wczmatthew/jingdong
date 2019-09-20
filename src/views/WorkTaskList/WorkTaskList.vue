<<template lang="html">
    <div class="worktasklist-container">
        <div class="worktask-list">
            <w-scroll 
                ref="scroll" 
                class="scroll-view"
                @pulling-down="onPullingDown" 
                @pulling-up="onPullingUp">
                <no-data v-if="noData"></no-data>
                <w-loading-row v-if="isFirstLoading"></w-loading-row>
                <ul class="list-wrapper">
                    <!-- <li class="list-item">
                        <div class="wt-li-header">
                        </div>
                        <div class="wt-li-body">
                            <div class="wt-li-left">
                                <img src="@/assets/logo.png">
                            </div>
                            <div class="wt-li-right">
                                <ul>
                                    <li>项目:微讯二次开发</li>
                                    <li>任务:代码</li>
                                </ul>
                            </div>
                        </div>
                    </li> -->
                    <li v-for="(item, index) in worktaskList" class="list-item" :key="index">
                        <div class="wt-li-header">
                        </div>
                        <div class="wt-li-body">
                            <div class="wt-li-left">
                                <img src="@/assets/logo.png">
                            </div>
                            <div class="wt-li-right">
                                <ul>
                                    <li>{{index}}项目:{{ item.Attribute11 }}</li>
                                    <li>任务:{{ item.Attribute3 }}</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <!-- <li class="list-item" >
                        <div class="top is-black is-bold line-height">
                            2.sadkfajskf
                        </div>
                        <div class="middle is-grey line-height">ksfkafjkasfjksafjasfksf</div>
                        <div>222</div>
                    </li>
                    <li class="list-item" >
                        <div class="top is-black is-bold line-height">
                            3.sadkfajskf
                        </div>
                        <div class="middle is-grey line-height">ksfkafjkasfjksafjasfksf</div>
                        <div>333</div>
                    </li>
                    <li class="list-item" >
                        <div class="top is-black is-bold line-height">
                            4.sadkfajskf
                        </div>
                        <div class="middle is-grey line-height">ksfkafjkasfjksafjasfksf</div>
                        <div>4444</div>
                    </li>
                    <li class="list-item" >
                        <div class="top is-black is-bold line-height">
                            4.sadkfajskf
                        </div>
                        <div class="middle is-grey line-height">ksfkafjkasfjksafjasfksf</div>
                        <div>4444</div>
                    </li>
                    <li class="list-item" >
                        <div class="top is-black is-bold line-height">
                            4.sadkfajskf
                        </div>
                        <div class="middle is-grey line-height">ksfkafjkasfjksafjasfksf</div>
                        <div>4444</div>
                    </li>
                    <li class="list-item" >
                        <div class="top is-black is-bold line-height">
                            4.sadkfajskf
                        </div>
                        <div class="middle is-grey line-height">ksfkafjkasfjksafjasfksf</div>
                        <div>4444</div>
                    </li> -->
                </ul>
            </w-scroll>
        </div>
    </div>
</template>
<script>
import Utils from '@/common/Utils';
import service from '@/services/worktask.service';
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            isFirstLoading: true,
            noData: true,
            pageNum: 1,
            pageSize: 10,
            totalNum: 0,
            hasNext: true,
            worktaskList: [],
        }
    },
    mounted() {
        this.onPullingDown();
    },
    methods: {
        // 下拉刷新，将重新进行数据首次数据获取
        onPullingDown() {
            console.log("wt list on pulling down");
            this.pageNum = 1;
            this.getData();
        },
        // 上拉加载，将加载更多数据
        onPullingUp() {
            if(!this.hasNext) {
                // 没有数据
                this.$refs.scroll && this.$refs.scroll.forceUpdate(true);
                return;
            }
            this.getData();
        },
        async getData() {
            const result = await service.getWorkTaskList({arg1: '2d9b35b0dc4cc56540bdce0fe3ed5f76', pageNum: this.pageNum, pageSize: this.pageSize, type: this.type});
            this.isFirstLoading = false;
            if (!result) return;
            if (this.pageNum == 1) {
                this.$refs.worktaskList && this.$refs.worktaskList.updateList([]);
                this.worktaskList = result.rows;
            } else {
                this.worktaskList = this.worktaskList.concat([...result.rows]);
            }
            this.totalNum = result.total;

            this.$refs.worktaskList && this.$refs.worktaskList.updateList(this.worktaskList);
            this.noData = !this.worktaskList.length;
            this.hasNext = this.worktaskList.length < result.total;
            if (this.hasNext) {
                this.pageNum += 1;
            }
            this.$refs.scroll && this.$refs.scroll.forceUpdate(true);
        }
    },
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
            .worktasklist-container
                top: 2px;
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction: column;
                overflow: hidden;
                .worktask-list 
                    flex: 1;
                    overflow: auto;
                    border-top-right-radius: .05rem;
                    border-top-left-radius: .05rem;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    padding-top: .1rem;
                    .scroll-view 
                        flex: 1;
                        .cube-pulldown-loaded
                            span 
                                font-size:14px;
                        .cube-scroll-content
                            .cube-pullup-wrapper
                                .before-trigger
                                    span
                                        font-size:14px
                            .cube-scroll-list-wrapper
                                .list-wrapper
                                    overflow: hidden
                                    li
                                        padding: 15px 10px
                                        margin-top: 10px
                                        text-align: left
                                        background-color: white
                                        font-size: 14px
                                        color: #999
                                        white-space: normal
                                        .wt-li-header
                                            height: 10px;
                                        .wt-li-body
                                            display: flex
                                            .wt-li-left
                                                width: 30%
                                                img 
                                                    width: 50px
                                                    height: 50px
                                                    padding-left: 5px
                                            .wt-li-right
                                                width: 65%
</style>