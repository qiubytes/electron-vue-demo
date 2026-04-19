<template>
    <context-holder />
    <a-row>
        <a-col :span="8">请输入文件内容</a-col>
        <a-col :span="8"> <a-input v-model:value="value1" placeholder="文件内容" /></a-col>
        <a-col :span="8"> <a-button type="primary" @click="writeclick">写入文件</a-button></a-col>
    </a-row>
    <a-row>
        <a-col :span="8"><a-button type="primary" @click="readClick">读取内容</a-button></a-col>
        <a-col :span="8"> <label>{{ value2 }}</label></a-col>
        <a-col :span="8"> </a-col>
    </a-row>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { message } from 'ant-design-vue';
const [messageApi, contextHolder] = message.useMessage();

const value1 = ref<string>('');
const value2 = ref<string>('');

const writeclick = async () => {
    let re = await window.api.saveFile(value1.value);
    if (re) {
        messageApi.info('写入成功！');
    }
}
const readClick = async () => {
    let re = await window.api.readfile();
    value2.value = re;
}
</script>