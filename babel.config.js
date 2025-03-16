module.exports = function(api){
    api.cache(true);
    return {
        presets: ["babel-presets-expo"],
        plugins : ["nativewind/babel"]
    }
}