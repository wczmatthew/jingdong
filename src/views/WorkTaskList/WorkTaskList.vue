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
                    <li class="list-item" >
                        <div class="top is-black is-bold line-height">
                            1.sadkfajskf
                        </div>
                        <div class="middle is-grey line-height">ksfkafjkasfjksafjasfksf</div>
                        <div>1111</div>
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
                .line-height
                    line-height: 1.5
                .is-black
                    color: black
                .is-grey
                    color: #999
                .is-bold
                    font-weight: bold
                .top
                    display: flex
                    .avatar
                        width: 15px
                        height: 15px
                        margin-right: 2px
                        border-radius: 100%
                    .time
                        flex: 1
                .middle
                    display: flex
                    margin: 10px 0
                    color: black
                .hot-title
                    display: flex
                    align-items: center
                    font-size: 12px
                    .hot-sequence
                        display: inline-block
                        margin-right: 2px
                        padding: 3px 6px
                        border-radius: 2px
                        background-color: darkgoldenrod
                        color: white
                .hot-content
                    margin-top: 15px
</style>