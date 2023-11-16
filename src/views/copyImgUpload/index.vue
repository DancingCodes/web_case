<template>
    <el-upload class="avatar-uploader" action="http://ff.topcrm.vip/prod-api/ff/common/upload" :show-file-list="false"
        :on-success="handleAvatarSuccess" @mouseenter.native="pasteInput.focus()">
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <el-icon v-else class="avatar-uploader-icon">
            <i-ep-Plus />
        </el-icon>
        <input type="text" ref="pasteInput" @paste="getPasteValue" class="none">
    </el-upload>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'
import type { UploadProps } from 'element-plus'
const imageUrl = ref()
const pasteInput = ref()
const handleAvatarSuccess: UploadProps['onSuccess'] = (
    _response,
    uploadFile
) => {
    // 在此处调用上传接口然后放入图片列表
    // 模拟：使用图片的本地路径展示
    imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}

const getPasteValue = (value: any) => {
    const imageBlob = value.clipboardData.files[0]
    // 在此处调用上传接口然后放入图片列表
    // 模拟：使用图片的本地路径展示
    console.log(URL.createObjectURL(imageBlob!))
    imageUrl.value = URL.createObjectURL(imageBlob!)
}

</script>
  
<style scoped lang="scss">
.avatar-uploader {
    width: 178px;
    height: 178px;

    .avatar {
        width: 100%;
        height: 100%;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        text-align: center;
    }

    :deep(.el-upload) {
        border: 1px dashed var(--el-border-color);
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: var(--el-transition-duration-fast);
    }

    :deep(.el-upload):hover {
        border-color: var(--el-color-primary);
    }

    .none {
        width: 0;
        height: 0;
        padding: 0;
        border: 0;
    }

}
</style>