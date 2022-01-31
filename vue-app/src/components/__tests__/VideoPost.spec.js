import {shallowMount} from '@vue/test-utils'
import VideoPost from "../VideoPost";

describe("VideoPost.vue", () => {
    it('sanity test', () => {
        return
    })
    it("should component exists", () => {
        const wrapper = mountComponent()
        expect(wrapper.exists()).toBeTruthy()
    })
    it("should component title exists", () => {
        const wrapper = mountComponent()
        const title = wrapper.find("#title");
        expect(title.text()).toContain("Vue.js Course for Beginners [2021 Tutorial]")
    })
    it("should component click navigate", async () => {
        const wrapper = mountComponent()
        const goToVideo=jest.fn();
        wrapper.setMethods({
            goToVideo
        })
        const videoSrc = wrapper.find(".main-video");
        await videoSrc.trigger("click");
        expect(goToVideo).toBeCalled();
    })
    it("should component mouseenter change image", async () => {
        const wrapper = mountComponent()
        const videoSrc = wrapper.find(".main-video");
        await videoSrc.trigger("mouseenter");
        expect(videoSrc.attributes("src")).toContain('https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/1-hover.webp')
    })
})

function mountComponent() {
    return shallowMount(VideoPost,{
        propsData:{
            video: {
                "id": 1,
                "videoAddress": "https://www.youtube.com/watch?v=FXpIoQ_rT_c",
                "coverImage": "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/1-cover.webp",
                "hoverImage": "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/1-hover.webp",
                "title": "Vue.js Course for Beginners [2021 Tutorial]",
                "viewCount": 254,
                "publishDateInMonth": 4,
                "ownerImage": "https://yt3.ggpht.com/ytc/AKedOLTtJvQ1Vfew91vemeLaLdhjOwGx3tTBLlreK_QUyA=s68-c-k-c0x00ffffff-no-rj",
                "ownerName": "freeCodeCamp.org",
                "description": "Learn Vue 3 by in this full course. Vue.js is an open-source model–view–view model front end JavaScript framework for building user interfaces and single-page applications."
            }
        }
    });
}