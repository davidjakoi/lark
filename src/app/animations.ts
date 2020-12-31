import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, transition, animate, style, query, animateChild, group } from '@angular/animations';

export const slideInAnimation =
trigger('routeAnimations', [
  transition(
    '* => blog',
    [
      query(
        ':enter, :leave',
        style(
          {
            position: 'fixed',
            width: '100%'
          }
        )
      ),
      group(
        [
          query(
            ':enter',
            [
              style({ transform: 'translateX(-100%)' }),
              animate(
                '0.5s ease-in-out',
                style({ transform: 'translateX(0%)' })
              )
            ],
            { optional: true }
          ),
          query(
            ':leave',
            [
              style({ transform: 'translateX(0%)' }),
              animate(
                '0.5s ease-in-out',
                style({ transform: 'translateX(100%)' })
              )
            ],
            { optional: true }
          )
        ]
      )
    ]
  ),
  transition(
    'blog => *',
    [
      group([
        query(
          ':enter, :leave',
          style(
            {
              position: 'fixed',
              width: '100%'
            }
          )
        ),
        query(
          ':enter',
          [
            style({ transform: 'translateX(100%)' }),
            animate(
              '0.5s ease-in-out',
              style({ transform: 'translateX(0%)' })
            )
          ],
          { optional: true }
        ),
        query(
          ':leave',
          [
            style({ transform: 'translateX(0%)' }),
            animate(
              '0.5s ease-in-out',
              style({ transform: 'translateX(-100%)' })
            )
          ],
          { optional: true }
        ),
      ])
    ]
  ),
  transition(
    'about => contact',
    [
      group([
        query(
          ':enter, :leave',
          style(
            {
              position: 'fixed',
              width: '100%'
            }
          )
        ),
        query(
          ':enter',
          [
            style({ transform: 'translateX(100%)' }),
            animate(
              '0.5s ease-in-out',
              style({ transform: 'translateX(0%)' })
            )
          ],
          { optional: true }
        ),
        query(
          ':leave',
          [
            style({ transform: 'translateX(0%)' }),
            animate(
              '0.5s ease-in-out',
              style({ transform: 'translateX(-100%)' })
            )
          ],
          { optional: true }
        ),
      ])
    ]
  )
]);


  // trigger('routeAnimations', [
  //   transition('blog <=> about', [
  //     style({ position: 'relative' }),
  //     query(':enter, :leave', [
  //       style({
  //         position: 'absolute',
  //         top: 0,
  //         left: 0,
  //         width: '100%'
  //       })
  //     ], { optional: true }),
  //     query(':enter', [
  //       style({ left: '-100%' })
  //     ], { optional: true }),
  //     query(':leave', animateChild(), { optional: true }),
  //     group([
  //       query(':leave', [
  //         animate('300ms ease-out', style({ left: '100%' }))
  //       ], { optional: true }),
  //       query(':enter', [
  //         animate('300ms ease-out', style({ left: '0%' }))
  //       ], { optional: true })
  //     ]),
  //     query(':enter', animateChild(), { optional: true }),
  //   ]),
  //   transition('* <=> *', [
  //     style({ position: 'relative' }),
  //     query(':enter, :leave', [
  //       style({
  //         position: 'absolute',
  //         top: 0,
  //         left: 0,
  //         width: '100%'
  //       })
  //     ], { optional: true }),
  //     query(':enter', [
  //       style({ left: '-100%' })
  //     ], { optional: true }),
  //     query(':leave', animateChild(), { optional: true }),
  //     group([
  //       query(':leave', [
  //         animate('200ms ease-out', style({ left: '100%' }))
  //       ], { optional: true }),
  //       query(':enter', [
  //         animate('300ms ease-out', style({ left: '0%' }))
  //       ], { optional: true })
  //     ]),
  //     query(':enter', animateChild(), { optional: true }),
  //   ])
  // ]);

  // trigger('routeAnimations', [
  //   transition('* <=> *', [
  //     style({ position: 'relative' }),
  //     query(':enter, :leave', [
  //       style({
  //         position: 'absolute',
  //         top: 0,
  //         left: 0,
  //         width: '100%'
  //       })
  //     ], { optional: true }),

  //     query(':enter', [
  //       style({ left: '-100%'})
  //     ], { optional: true }),
  //     query(':leave', animateChild(), { optional: true }),
  //     group([
  //       query(':leave', [
  //         animate('300ms ease-out', style({ left: '100%'}))
  //       ], { optional: true }),
  //       query(':enter', [
  //         animate('300ms ease-out', style({ left: '0%'}))
  //       ], { optional: true })
  //     ]),
  //     query(':enter', animateChild(), { optional: true }),
  //   ]),

  //   transition('* <=> *', [
  //     style({ position: 'relative' }),
  //     query(':enter, :leave', [
  //       style({
  //         position: 'absolute',
  //         top: 0,
  //         left: 0,
  //         width: '100%'
  //       })
  //     ], { optional: true }),
  //     query(':enter', [
  //       style({ left: '-100%'})
  //     ], { optional: true }),
  //     query(':leave', animateChild(), { optional: true }),
  //     group([
  //       query(':leave', [
  //         animate('200ms ease-out', style({ left: '100%'}))
  //       ], { optional: true }),
  //       query(':enter', [
  //         animate('300ms ease-out', style({ left: '0%'}))
  //       ], { optional: true })
  //     ]),
  //     query(':enter', animateChild(), { optional: true }),
  //   ])