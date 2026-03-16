import { lazy, Suspense } from 'react';
import type { RouteObject } from 'react-router-dom';
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import ServicePage from "../pages/service/page";

const AiTelegramAutoposting = lazy(() => import("../pages/service/ai-telegram-autoposting/page"));
const AiGoogleMapsParsing = lazy(() => import("../pages/service/ai-google-maps-parsing/page"));
const AiPersonalAssistant = lazy(() => import("../pages/service/ai-personal-assistant/page"));
const AiVoiceAgent = lazy(() => import("../pages/service/ai-voice-agent/page"));
const AiLeadSorter = lazy(() => import("../pages/service/ai-lead-sorter/page"));
const AiCustomSolution = lazy(() => import("../pages/service/ai-custom-solution/page"));
const BotSupport = lazy(() => import("../pages/service/bot-support/page"));
const SubscriptionHelp = lazy(() => import("../pages/service/subscription-help/page"));
const BotMaintenance = lazy(() => import("../pages/service/bot-maintenance/page"));
const TelegramBotClever = lazy(() => import("../pages/service/telegram-bot-clever/page"));
const TelegramBotAI = lazy(() => import("../pages/service/telegram-bot-ai/page"));
const TelegramBotVK = lazy(() => import("../pages/service/telegram-bot-vk/page"));
const MaxBot = lazy(() => import("../pages/service/max-bot/page"));
const VKCommunityDesign = lazy(() => import("../pages/service/vk-community-design/page"));
const ProfessionalDesign = lazy(() => import("../pages/service/professional-design/page"));
const TildaWebsites = lazy(() => import("../pages/service/tilda-websites/page"));
const ReaddyWebsites = lazy(() => import("../pages/service/readdy-websites/page"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/service/telegram-bot-clever",
    element: <Suspense fallback={null}><TelegramBotClever /></Suspense>,
  },
  {
    path: "/service/max-bot",
    element: <Suspense fallback={null}><MaxBot /></Suspense>,
  },
  {
    path: "/service/telegram-bot-ai",
    element: <Suspense fallback={null}><TelegramBotAI /></Suspense>,
  },
  {
    path: "/service/telegram-bot-vk",
    element: <Suspense fallback={null}><TelegramBotVK /></Suspense>,
  },
  {
    path: "/service/vk-community-design",
    element: <Suspense fallback={null}><VKCommunityDesign /></Suspense>,
  },
  {
    path: "/service/professional-design",
    element: <Suspense fallback={null}><ProfessionalDesign /></Suspense>,
  },
  {
    path: "/service/tilda-websites",
    element: <Suspense fallback={null}><TildaWebsites /></Suspense>,
  },
  {
    path: "/service/readdy-websites",
    element: <Suspense fallback={null}><ReaddyWebsites /></Suspense>,
  },
  {
    path: "/service/ai-telegram-autoposting",
    element: <Suspense fallback={null}><AiTelegramAutoposting /></Suspense>,
  },
  {
    path: "/service/ai-google-maps-parsing",
    element: <Suspense fallback={null}><AiGoogleMapsParsing /></Suspense>,
  },
  {
    path: "/service/ai-personal-assistant",
    element: <Suspense fallback={null}><AiPersonalAssistant /></Suspense>,
  },
  {
    path: "/service/ai-voice-agent",
    element: <Suspense fallback={null}><AiVoiceAgent /></Suspense>,
  },
  {
    path: "/service/ai-lead-sorter",
    element: <Suspense fallback={null}><AiLeadSorter /></Suspense>,
  },
  {
    path: "/service/ai-custom-solution",
    element: <Suspense fallback={null}><AiCustomSolution /></Suspense>,
  },
  {
    path: "/service/bot-support",
    element: <Suspense fallback={null}><BotSupport /></Suspense>,
  },
  {
    path: "/service/subscription-help",
    element: <Suspense fallback={null}><SubscriptionHelp /></Suspense>,
  },
  {
    path: "/service/bot-maintenance",
    element: <Suspense fallback={null}><BotMaintenance /></Suspense>,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;