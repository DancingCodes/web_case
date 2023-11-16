<template>
    <el-upload class="avatar-uploader" action="http://ff.topcrm.vip/prod-api/ff/common/upload" :show-file-list="false"
        :on-success="handleAvatarSuccess">
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <el-icon v-else class="avatar-uploader-icon">
            <i-ep-Plus />
        </el-icon>
    </el-upload>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'
import type { UploadProps } from 'element-plus'
const imageUrl = ref()
const handleAvatarSuccess: UploadProps['onSuccess'] = (
    _response,
    uploadFile
) => {
    imageUrl.value = URL.createObjectURL(uploadFile.raw!)
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


}
</style>