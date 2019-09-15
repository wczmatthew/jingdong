<<template lang="html">
    <div class="worktasklist-container">
        <div class="worktask-list">
            <w-scroll ref="scroll" @pulling-down="OnPullingDown" @pulling-up="OnPullingUp">
                <no-data v-if="noData"></no-data>
                <w-loading-row v-if="isFirstLoading"></w-loading-row>
                <ul class="list-wrapper">
                    <!-- <li v-for="(item, index) in recommendData" class="list-item" :key="index">
                    <div class="top is-black is-bold line-height">
                        {{item.question}}
                    </div>
                    <div class="middle is-grey line-height">{{item.content}}</div>
                    <div>{{resolveQuestionFollowers(item)}}</div>
                    </li> -->
                    <li class="list-item">
                        <div class="wt-li-header">
                            <!--头部放编辑按钮-->
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
                    </li>
                    <li class="list-item" >
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
            pageNum: 1,
            pageSize: 30,
            worktaskList: [],
        }
    },
    methods: {

    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .cube-page
        &.tab-composite-view
            > .wrapper
                > .content
                    margin: 0
    .tab-composite-view
        .cube-tab-bar
            background-color: white
        .cube-tab, .cube-tab_active
            color: black
        .cube-tab-bar-slider
            background-color: black
        .tab-slide-container
            position: fixed
            top: 33px   /*74px 由于去掉header */
            left: 0
            right: 0
            bottom: 0
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