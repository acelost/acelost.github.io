document.addEventListener('DOMContentLoaded', function () {
    let queryParams = (new URL(document.location)).searchParams;
    let base64Source = queryParams.get("source");
    let base64Timeline = queryParams.get("timeline");
    if (base64Timeline != null) {
        let sourceString = base64Source ? atob(base64Source) : "anonymous";
        let timelineString = atob(base64Timeline);
        let timelineJson = JSON.parse(timelineString);
        timelineJson["source"] = sourceString;
        handleTimeline(timelineJson);
    }
});
