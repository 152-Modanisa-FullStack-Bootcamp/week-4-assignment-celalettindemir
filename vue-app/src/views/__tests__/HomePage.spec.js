import { shallowMount} from '@vue/test-utils'
import HomePage from "../HomePage";
import VideoPost from "../../components/VideoPost";

describe("HomePage.vue", () => {
    it('sanity test', () => {
        return
    })
    it("should component exists", () => {
        const wrapper = mountComponent()
        expect(wrapper.exists()).toBeTruthy()
    })
    it("should component tree count", () => {
        const wrapper = mountComponent()
        const VideoPostArr = wrapper.findAllComponents(VideoPost)
        expect(VideoPostArr).toHaveLength(3)
    })
})

function mountComponent() {
    return shallowMount(HomePage,{
        mocks:{
            $store: {
                dispatch:jest.fn(),
                state:{
                    VideoList: [
                        {
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
                        },
                        {
                            "id": 2,
                            "videoAddress": "https://www.youtube.com/watch?v=qZXt1Aom3Cs",
                            "coverImage": "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/2-cover.webp",
                            "hoverImage": "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/2-hover.webp",
                            "title": "Vue JS Crash Course",
                            "viewCount": 623,
                            "publishDateInMonth": 10,
                            "ownerImage": "https://yt3.ggpht.com/ytc/AKedOLSxHOOxxa9Af8Bfb2XMop3lm4tor9bViWiC-d5aaw=s68-c-k-c0x00ffffff-no-rj",
                            "ownerName": "Traversy Media",
                            "description": "Learn the fundamentals of Vue JS (v3) in this project-based crash course",
                            "favorite": true
                        },
                        {
                            "id": 3,
                            "videoAddress": "https://www.youtube.com/watch?v=nhBVL41-_Cw&ab_channel=Fireship",
                            "coverImage": "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/3-cover.webp",
                            "hoverImage": "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/3-hover.webp",
                            "title": "Vue.js Explained in 100 Seconds",
                            "viewCount": 662,
                            "publishDateInMonth": 12,
                            "ownerImage": "https://yt3.ggpht.com/ytc/AKedOLTcIl6kKt3lEPJEySUf_hpHiKDKiFeo9eWPReLysQ=s68-c-k-c0x00ffffff-no-rj",
                            "ownerName": "Fireship",
                            "description": "What is Vue.js? Learn the basics of Vue and build your first reactive UI component in just 100"
                        },
                    ]
                }
            },

        }
    });
}