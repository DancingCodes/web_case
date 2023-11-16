<template>
    <h2 class="title">将指定范围打印为PDF</h2>
    <div class="header">
        <h3>这里是打印区域</h3>
        <el-button @click="generatePDF">
            生成PDF
        </el-button>
    </div>
    <!-- 打印区域 -->
    <div class="printArea" id="printArea">
        <h4>逢雪宿芙蓉山主人</h4>
        <h4>唐·刘长卿</h4>
        <h4>日暮苍山远,天寒白屋贫。</h4>
        <h4>柴门闻犬吠,风雪夜归人。</h4>
    </div>
</template>

<script setup lang="ts">
import html2Canvas from "html2Canvas";
import jsPDF from "jspdf";

const generatePDF = async () => {
    // 设置pdf生成器 p竖 / l横
    const pdfBuilder = new jsPDF("p", "pt", "a4", true);
    // 获取需要打印到pdf的区域
    const printEl = document.querySelector("#printArea") as HTMLElement;
    // 将打印区域转换为canvas
    const canvasPrintEl = await html2Canvas(printEl, {
        // 可以让pdf中的图片更清晰，但文件大小也会增加
        scale: 3,
    });
    // 设置pdf边距
    const pdfPaddingTop = 50;
    const pdfPaddingLeftAndRight = 20;
    // 将canvasDom转换为图片并添加到pdf
    pdfBuilder.addImage(
        canvasPrintEl.toDataURL("image/png"),
        "PNG",
        pdfPaddingLeftAndRight,
        pdfPaddingTop,
        595.28 - pdfPaddingLeftAndRight * 2,
        printEl.offsetHeight * ((595.28 - pdfPaddingLeftAndRight * 2) / printEl.offsetWidth)
    );
    // 下载pdf文件
    pdfBuilder.save(`elToPdf.pdf`);
}

</script>

<style scoped lang="scss">
.title {
    text-align: center;
}

.printArea {
    border: 1px solid #ccc;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>