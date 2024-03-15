const paths = {
    homePath() {
        return '/'
    },
    topicShowPath(topicSlug: string) {
        return `/topic/${topicSlug}`
    },
    postCreatePath(topicSlug: string) {
        return `/topic/${topicSlug}/posts/new`

    },
    postShowPath(topicSlug: string, postId: string) {
        return `/topic/${topicSlug}/posts/${postId}`

    }
}

export default paths;