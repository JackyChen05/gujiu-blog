# -*- coding: utf-8 -*-
"""清洗 NotebookLM 音频转录噪声：
1. 去掉逐字之间的空格（中英文之间保留一个空格）
2. 繁体转简体（用 opencc 如果可用，否则用内置映射兜底——本环境直接保留，转录为繁体时由后续人工规则处理）
3. 去掉广告口播行
"""
import re, sys, json, io

def clean(text: str) -> str:
    # 去掉字间空格：中文字符之间的空格、中文与标点之间的空格
    t = text
    # 广告口播
    t = re.sub(r"想\s*收\s*聽\s*更\s*多\s*付\s*費\s*節\s*目[^。]*。", "", t)
    t = re.sub(r"想\s*收\s*听\s*更\s*多\s*付\s*费\s*节\s*目[^。]*。", "", t)
    # 逐字空格合并
    t = re.sub(r"(?<=[\u4e00-\u9fff\u3000-\u303f\uff00-\uffef])\s+(?=[\u4e00-\u9fff\u3000-\u303f\uff00-\uffef])", "", t)
    # 中文与英文/数字之间保留单空格
    t = re.sub(r"(?<=[\u4e00-\u9fff])\s+(?=[A-Za-z0-9])", " ", t)
    t = re.sub(r"(?<=[A-Za-z0-9])\s+(?=[\u4e00-\u9fff])", " ", t)
    t = re.sub(r"[ \t]{2,}", " ", t)
    return t.strip()

if __name__ == "__main__":
    data = sys.stdin.read()
    print(clean(data))
