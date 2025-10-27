'use client'

import React, { useReducer } from 'react'
import Image from 'next/image'

type State = {
    rangeValue: number
}

type Action =
    | { type: 'change'; payload: number }
    | { type: 'move'; payload: number }

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'change':
            return {
                rangeValue: action.payload
            }
        case 'move':
            return {
                rangeValue: Math.round(action.payload)
            }
        default:
            return state
    }
}

type ChangeEvent = React.ChangeEvent<HTMLInputElement>
type PointerEvent = React.PointerEvent<HTMLDivElement>
type InlineStyle = React.CSSProperties

interface Props {
    beforeImage: string
    afterImage: string
    onChange?: (event: ChangeEvent) => void
    onPointerMove?: (event: PointerEvent) => void
    onPointerEnter?: (event: PointerEvent) => void
    onPointerLeave?: (event: PointerEvent) => void
    pointerMove?: boolean
    className?: string
    beforeClassName?: string
    afterClassName?: string
    buttonClassName?: string
    style?: InlineStyle
    beforeStyle?: InlineStyle
    afterStyle?: InlineStyle
    buttonStyle?: InlineStyle
}

const BeforeAfterComponent = ({
    beforeImage,
    afterImage,
    onChange,
    onPointerMove,
    onPointerEnter,
    onPointerLeave,
    pointerMove = false,
    className = 'before-after-slider',
    beforeClassName = 'before',
    afterClassName = 'after',
    buttonClassName = 'resize-button',
    style,
    beforeStyle,
    afterStyle,
    buttonStyle
}: Props) => {
    const [{ rangeValue }, dispatch] = useReducer(reducer, {
        rangeValue: 50
    })

    const handleChange = (event: ChangeEvent) => {
        dispatch({ type: 'change', payload: Number(event.target.value) })

        if (onChange) onChange(event)
    }

    const handlePointerMove = (event: PointerEvent) => {
        const { clientX, currentTarget } = event
        const { left, width } = currentTarget.getBoundingClientRect()
        const positionX = clientX - left

        if (positionX >= 0)
            dispatch({ type: 'move', payload: (positionX / width) * 100 })

        if (onPointerMove) onPointerMove(event)
    }

    const handlePointerEnter = (event: PointerEvent) => {
        if (!onPointerEnter) return

        onPointerEnter(event)
    }

    const handlePointerLeave = (event: PointerEvent) => {
        if (!onPointerLeave) return

        onPointerLeave(event)
    }

    return (
        <div
            className={className}
            style={{
                position: `relative`,
                overflow: `hidden`,
                width: 'fit-content',
                cursor: 'e-resize',
                userSelect: 'none',
                ...style
            }}
            onPointerMove={pointerMove ? handlePointerMove : undefined}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
        >
            <div
                className={beforeClassName}
                style={{
                    position: 'absolute',
                    overflow: 'hidden',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    zIndex: 2,
                    clipPath: `inset(0 ${100 - rangeValue}% 0 0)`,
                    ...beforeStyle
                }}
            >
                <Image src={beforeImage} alt="before" fill style={{ objectFit: 'cover' }} />
            </div>

            <div
                className={afterClassName}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1,
                    ...afterStyle
                }}
            >
                <Image
                    src={afterImage}
                    alt="after"
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>

            {!pointerMove && (
                <>
                    <input
                        type="range"
                        min={0}
                        max={100}
                        value={rangeValue}
                        name="slider"
                        onChange={handleChange}
                        style={{
                            appearance: 'none',
                            backgroundColor: 'transparent',
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            cursor: 'inherit',
                            zIndex: 3
                        }}
                    />
                    {/* Vertical separator line */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: `${rangeValue}%`,
                            width: '3px',
                            height: '100%',
                            backgroundColor: '#000000',
                            zIndex: 3,
                            pointerEvents: 'none'
                        }}
                    />
                    <div
                        className={buttonClassName}
                        style={{
                            backgroundColor: '#000000',
                            pointerEvents: 'none',
                            position: 'absolute',
                            top: '50%',
                            left: `${rangeValue}%`,
                            transform: `translate(-50%,-50%)`,
                            borderRadius: '50%',
                            width: 30,
                            height: 30,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 4,
                            ...buttonStyle
                        }}
                    >
                        <div className="flex items-center justify-center -space-x-2">
                            <svg
                                fill="#ffffff"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                            >
                                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                            </svg>
                            <svg
                                fill="#ffffff"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                            >
                                <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
                            </svg>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default BeforeAfterComponent