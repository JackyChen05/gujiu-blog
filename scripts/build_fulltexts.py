# -*- coding: utf-8 -*-
"""把已抓取的课程转录写成结构化 md 片段文件，供手工整合进文章。"""
import re, json, os

OUT = r'D:/WorkbuddySpace/Notebooklm/gujiu-blog/scripts/cleaned'
os.makedirs(OUT, exist_ok=True)

TRANSCRIPTS = {}

def clean(text: str) -> str:
    t = text
    t = re.sub(r"想\s*收\s*[聽听]\s*更\s*多\s*付\s*[費费]\s*节\s*目[^。]*。", "", t)
    t = re.sub(r"(?<=[\u4e00-\u9fff\u3000-\u303f\uff00-\uffef，。；：？！、「」（）])\s+(?=[\u4e00-\u9fff\u3000-\u303f\uff00-\uffef，。；：？！、「」（）])", "", t)
    t = re.sub(r"(?<=[\u4e00-\u9fff])\s+(?=[A-Za-z0-9])", " ", t)
    t = re.sub(r"(?<=[A-Za-z0-9])\s+(?=[\u4e00-\u9fff])", " ", t)
    t = re.sub(r"[ \t]{2,}", " ", t)
    return t.strip()
