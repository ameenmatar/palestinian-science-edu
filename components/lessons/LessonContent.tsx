// components/lessons/LessonContent.tsx
import React from 'react'
import { Lesson } from '@/types'

interface LessonContentProps {
  lesson: Lesson
}

export default function LessonContent({ lesson }: LessonContentProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100" dir="rtl">
      <h1 className="text-3xl font-bold text-dark mb-4">{lesson.title}</h1>
      <p className="text-gray-600 mb-6">{lesson.description}</p>

      {/* Content */}
      <div
        className="prose prose-sm max-w-none text-right"
        dangerouslySetInnerHTML={{ __html: lesson.content }}
      />

      {/* Lesson Info */}
      <div className="mt-8 pt-8 border-t border-gray-200 flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-600">المدة الزمنية</p>
          <p className="font-bold text-dark">{lesson.duration} دقيقة</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">الترتيب</p>
          <p className="font-bold text-dark">الدرس {lesson.order}</p>
        </div>
      </div>
    </div>
  )
}
